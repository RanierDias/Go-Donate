import { iPosts } from "../../../../pages/Dashboard_Company/types";

export interface iCardFundraising {
  post: iPosts;
  callback: () => void;
}
