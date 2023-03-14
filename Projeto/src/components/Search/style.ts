import styled from "styled-components";

const FormSearch = styled.form`
  width: 100%;
  max-width: 280px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 8px 12px;
  border: 2px solid var(--gray-80);
  border-radius: 8px;
  background-color: var(--gray-80);

  transition: 0.4s;

  input {
    width: 100%;
    border: none;
    color: var(--white);
    background-color: transparent;
  }

  input:focus {
    outline: none;
  }

  :has(input:focus) {
    border-color: var(--gray-20);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    background-color: transparent;
    
    > svg {
      color: var(--white);
    }

    :hover svg {
      color: var(--primary-color);
    }
  }
`;
export default FormSearch;
