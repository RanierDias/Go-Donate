import { Dispatch, SetStateAction } from "react";
import { iPostCompany } from "../../../providers/@types";

export interface iCardPostsCompany {
  post: iPostCompany;
  type: "donate" | "fundraising";
  callback: Dispatch<SetStateAction<null | string>>;
  setSelectedPost: React.Dispatch<React.SetStateAction<iPostCompany>>;
}
