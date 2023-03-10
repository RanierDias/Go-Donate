import { Dispatch, SetStateAction } from "react";
import { iFundraising } from "../../../../pages/Dashboard_Company/types";

export interface iCardFundraising {
  post: iFundraising;
  callback: Dispatch<SetStateAction<null | string>>;
  setSelectedPost: React.Dispatch<React.SetStateAction<iFundraising>>;
}
