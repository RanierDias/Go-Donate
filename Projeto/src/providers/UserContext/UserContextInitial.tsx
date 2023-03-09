import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
      console.log("Cadastro Realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.log("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);

      const response = await api.post("login", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@UserId", response.data.user.id);
      console.log("Login realizado com sucesso");
      navigate("/user");
    } catch (error) {}
  };

  type AutoLoginFunc = () => void;

  const userAutoLogin: AutoLoginFunc = async () => {
    const token: string | null = localStorage.getItem("@TOKEN");
    const id: string | null = localStorage.getItem("@UserId");
    if (token) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const response = await api.get(`user/${id}`);
        setUser(response.data);
        navigate("/user");
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@TOKEN");
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    userAutoLogin();
  }, []);

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
