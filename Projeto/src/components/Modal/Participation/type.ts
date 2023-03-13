import { Dispatch, SetStateAction } from "react";
import { iFundraising } from "../../../providers/@types";


export interface iModalUser {
  callback: Dispatch<SetStateAction<null | string>>;
  selectedCard: iFundraising;

}