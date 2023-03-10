import { isAxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  IDefaultProviderProps,
  ILoginFormValues,
  IRegisterFormValues,
  IUser,
  IUserContext,
} from "./@Types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);
      const response = await api.post("register", formData);
      console.log(response);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      toast.success("Cadastro Realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);

      const response = await api.post("login", formData);
      const { isCompany } = response.data.user;
      setUser(response.data.user);

      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@UserId", response.data.user.id);
      toast.success("Login realizado com sucesso");

      isCompany ? navigate("/company") : navigate("/user");
    } catch (error) {
      if (isAxiosError(error)) {
        error.status === 401
          ? toast.error("Senha ou email errados")
          : error.status === 400
          ? toast.error(error.response?.data)
          : toast.error(error.response?.data);
      } else {
        toast.error("Ops! Algo deu errado");
      }
    }
  };

  type AutoLoginFunc = () => void;

  const userAutoLogin: AutoLoginFunc = async () => {
    const token: string | null = localStorage.getItem("@TOKEN");
    const id: string | null = localStorage.getItem("@UserId");
    if (token) {
      try {
        const response = await api.get(`user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data);
        navigate("/user");
      } catch (error) {
        console.log(error);
        localStorage.clear()
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    userAutoLogin();
  }, []);

  const userLogout = () => {
    setUser(null);
    localStorage.clear();
    navigate("/homepage");
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        userRegister,
        userLogin,
        userLogout,
        navigate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
