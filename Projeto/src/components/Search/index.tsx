import { useForm } from "react-hook-form";

import { BsSearch } from "react-icons/bs";
import FormSearch from "./style";
import { iSearchForm } from "./types";

const Search = ({ callback }: iSearchForm) => {
  const { register, handleSubmit, formState: {isDirty}} = useForm()

  return (
    <FormSearch>
      <input type="text" placeholder="Pesquisar participante" {...register('search')}/>
      <button onSubmit={() => handleSubmit(callback)}>
        <BsSearch />
      </button>
    </FormSearch>
);
}

export default Search;
