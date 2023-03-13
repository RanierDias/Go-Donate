import { iFundraising } from "../../../providers/@types";
import { IUser } from "../../../providers/UserContext/@Types";

export interface iSelectedCard {
  selectedCard: iFundraising;
  search: IUser[];
}
