import { StyledSearch } from "./style";
import { MdSearch } from "react-icons/md";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchForm = () => (
  <div>
    <input type="text" placeholder="Pesquisar participante" />
    <BsSearch />
  </div>
);

export default SearchForm;
