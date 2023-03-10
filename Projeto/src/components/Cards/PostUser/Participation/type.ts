import { Dispatch, SetStateAction } from "react";
import { iParticipation } from "../../../../pages/Dashboard_User/types";

export interface iCardParticipation {
  post: iParticipation;
  callback: Dispatch<SetStateAction<null | string>>;
  setSelectedCard: React.Dispatch<React.SetStateAction<iParticipation>>;
}