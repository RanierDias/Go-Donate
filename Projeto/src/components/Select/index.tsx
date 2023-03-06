import Div from "./style";
import { SlArrowDown } from "react-icons/sl";
import { iForm } from "./type";

const Select = ({ children, callback, name }: iForm) => {
  return (
    <Div>
      <select onChange={event => callback(event.target.value)} name={name}>{children}</select>
      <SlArrowDown />
    </Div>
  );
};

export default Select;
