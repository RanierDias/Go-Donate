import { Dispatch, SetStateAction } from "react";
import { iPostCompany } from "../../../providers/@types";

export interface iCardPostsCompany {
  post: iPostCompany;
  type: "donate" | "fundraising";
}
