import { SubmitHandler, FieldValues } from "react-hook-form";

export interface iSearchForm {
  callback: SubmitHandler<FieldValues>;
}