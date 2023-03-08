import styled from "styled-components";

export const Container = styled.fieldset`
  background-color: var(--inputs-color);
  border-radius: 10px;
  border: 2px solid var(--inputs-color);

  display: flex;
  &:focus-within svg {
    color: var(--primary-color);
  }
  &:focus-within {
    border-color: var(--primary-color);
  }

  label {
    padding: 18px 16px;
    &:hover svg {
      color: var(--primary-color);
    }
  }

  svg {
    color: var(--gray-30);
    font-size: 16px;
  }

  input {
    background-color: inherit;
    border: none;
    flex: 1;
    padding: 0px 18px;
    font-size: 16px;
    color: white;
  }

  > input::placeholder {
    color: var(--gray-30);
  }
`;
