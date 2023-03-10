import { Dispatch, SetStateAction } from "react";

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

export interface iCardPostsCompany {
  post: iPostCompany;
  type: "donate" | "fundraising";
  callback: Dispatch<SetStateAction<null | string>>;
  setSelectedPost: React.Dispatch<React.SetStateAction<iPostCompany>>;
}
