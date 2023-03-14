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

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--gray-60);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 12px;

    > label {
      font-size: 14px;
    }

    > small {
      font-size: 12px;
      color: var(--button-cancel);
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

      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        margin: 8px 0 8px 0;
        border-radius: 4px;
        background-color: var(--gray-20);
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: var(--primary-color);
      }
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    gap: 16px;
    margin-bottom: 16px;
    background-color: #ffffff;
  }
`;

export default Form;
