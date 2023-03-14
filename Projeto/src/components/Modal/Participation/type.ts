import { Dispatch, SetStateAction } from "react";
import { iFundraising } from "../../../providers/@types";

export interface iModalUser {
  post: iFundraising;
  callback: Dispatch<SetStateAction<null | string>>;
  selectedCard: iFundraising;
}
