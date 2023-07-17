import { forwardRef, InputHTMLAttributes } from "react";
import * as S from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  leftIcon: React.ReactElement;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ name, leftIcon, ...rest }, ref) => (
    <S.Container>
      <label htmlFor={name}>{leftIcon}</label>
      <input id={name} name={name} ref={ref} {...rest} />
    </S.Container>
  )
);

export default Input;
