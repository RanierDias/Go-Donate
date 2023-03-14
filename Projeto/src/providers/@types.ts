import { Dispatch, SetStateAction } from "react";
import { IUser } from "./UserContext/@Types";

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface iPosts {
  id: number;
  companyId: number;
  image: string;
  title: string;
  name: string;
  description: string;
  date: string;
  time: string;
  city: string;
  state: string;
  type: string;
}

export interface iFundraising {
  id: number;
  companyId: number;
  image: string;
  title: string;
  name: string;
  description: string;
  date: string;
  final_date: string;
  open_time: string;
  close_time: string;
  address: string;
  city: string;
  state: string;
  phone: string;
}

export interface IDonate {
  uuidCompany: string;
  uuidUser: string;
  fundraisingId: number;
  id: number;
  postId: number;
  role: string;
  participated: string;
  post: iFundraising;
  user: IUser;
}

export interface IDonateContext {
  posts: iPosts[];
  setPosts: Dispatch<SetStateAction<iPosts[]>>;
  fundraising: iFundraising[];
  setFundraising: Dispatch<SetStateAction<iFundraising[]>>;
  search: any;
  setSearch: Dispatch<SetStateAction<any>>;
  donations: IDonate[];
  filter: string | boolean;
  setFilter: Dispatch<SetStateAction<string | boolean>>;
  setDonations: React.Dispatch<React.SetStateAction<IDonate[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
