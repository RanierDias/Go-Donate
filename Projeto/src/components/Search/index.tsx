import { useForm } from "react-hook-form";

import { BsSearch } from "react-icons/bs";
import FormSearch from "./style";
import { iSearchForm } from "./types";

const Search = ({ callback }: iSearchForm) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm();

  return (
    <FormSearch
      onSubmit={
        isDirty ? handleSubmit(callback) : (event) => event.preventDefault()
      }
    >
      <input
        type="text"
        placeholder="Pesquisar participante"
        {...register("search")}
      />
      <button
        onSubmit={
          isDirty ? handleSubmit(callback) : (event) => event.preventDefault()
        }
      >
        <BsSearch />
      </button>
    </FormSearch>
  );
};

export default Search;
