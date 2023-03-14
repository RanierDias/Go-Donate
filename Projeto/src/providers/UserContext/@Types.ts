import { NavigateFunction } from "react-router-dom";
import { IDonate } from "../@types";

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  uuid: string;
  name: string;
  email: string;
  city: string;
  state: string;
  isCompany: boolean;
  image: string;
  background: string;
}

export interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
  city: string;
  state: string;
  isCompany: boolean | string;
  image: string;
  background: string;
}

export interface ILoginFormValues {
  name: string;
  email: string;
  password: string;
}

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogout: () => void;
  navigate: NavigateFunction;
}
