import { Dispatch, SetStateAction } from "react";
import { iFundraising } from "../../../pages/Dashboard_Company/types";

export interface iModalUser {
  callback: Dispatch<SetStateAction<null | string>>;
  selectedCard: iFundraising;

}