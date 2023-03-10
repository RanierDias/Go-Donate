import styled from "styled-components";

export const MainContainerRegister = styled.div`
  background-color: var(--secondary-color);
  height: 100vh;
  overflow: auto;

  section {
    img {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    gap: 3rem;

    section {
      img {
        display: block;
        height: 100%;
      }

      width: 60%;
      overflow: hidden;
    }
  }
`;

export const ContainerSideForm = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 0 auto;

  > h2 {
    color: white;
    font-size: 26px;
  }
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  select {
    background-color: var(--inputs-color);
    border: none;
    flex: 1;
    padding: 0px 18px;
    font-size: 18px;
    color: white;
    padding: 16px;
    border-radius: 8px;
    option {
      color: var(--gray-30);
    }
  }
`;

export const ButtonCadastrar = styled.button`
  background-color: var(--button-initial);
  padding: 16px 0;
  border-radius: 8px;
  color: white;

  font-family: "Roboto Slab";
  font-weight: 500;
  font-size: 16px;
`;
