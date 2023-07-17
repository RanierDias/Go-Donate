import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface iForm {
  children: ReactNode;
  callback: (value: string) => void
  name: string;
}