import { Dispatch, SetStateAction } from "react";

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface iPosts {
  id: number;
  companyId: number;
  title: string;
  name: string;
  description: string;
  date: string;
  time: string;
  city: string;
  state: string;
  type: string;
  image: string;
}

export interface iFundraising {
  id: number;
  companyId: number;
  title: string;
  name: string;
  description: string;
  date: string;
  final_date: string;
  open_time: string;
  closed_time: string;
  address: string;
  city: string;
  state: string;
  phone: string;
}

export interface iPostCompany {
  id: number;
  companyId: number;
  title: string;
  name: string;
  description: string;
  date: string;
  final_date?: string;
  time?: string;
  open_time?: string;
  closed_time?: string;
  address?: string;
  phone?: string;
  city: string;
  state: string;
}

export interface IDonate {
  uuidCompany: string;
  uuidUser: string;
  id: number;
  postId: number;
  role: string;
  participated: string;
}

export interface IDonateContext {
  posts: iPosts[];
  setPosts: Dispatch<SetStateAction<iPosts[]>>;
  fundraising: iFundraising[];
  setFundraising: Dispatch<SetStateAction<iFundraising[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  donations: IDonate[];
  selectedCard: iPostCompany;
  setSelectedCard: Dispatch<SetStateAction<any>>;
  showModal: null | string;
  setShowModal: Dispatch<SetStateAction<null | string>>;
  filter: string | boolean;
  setFilter: Dispatch<SetStateAction<string | boolean>>;
}
