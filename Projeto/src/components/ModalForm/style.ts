import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  max-height: 70vh;
  padding: 26px 32px 0 32px;
  overflow-y: scroll;
  background-color: #ffffff;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 12px;

    > label {
      font-size: 12px;
    }

    > input {
      height: 45px;
      padding: 0 12px;
      color: var(--white);
      border-radius: 8px;
      border: none;
      background-color: var(--gray-80);
    }

    > textarea {
      resize: vertical;
      height: 150px;
      padding: 12px;
      color: var(--white);
      border-radius: 8px;
      border: none;
      background-color: var(--gray-80);
    }
  }
`;

export default Form;
