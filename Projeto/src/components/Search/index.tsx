import { StyledSearch } from "./style";
import { MdSearch } from 'react-icons/md';
import React from "react";



const SearchForm = () => (
  <StyledSearch>
    <input type = 'text' placeholder = 'Digitar Pesquisa' />
    <button type='submit'></button>


  </StyledSearch>


);

export default SearchForm;


