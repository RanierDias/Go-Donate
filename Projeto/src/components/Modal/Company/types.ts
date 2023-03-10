import { Dispatch, SetStateAction } from "react";
import { iPostCompany } from "../../Cards/PostCompany/types";

export interface iModalCompany {
  callback: Dispatch<SetStateAction<null | string>>;
  selectedPost: iPostCompany;
}
