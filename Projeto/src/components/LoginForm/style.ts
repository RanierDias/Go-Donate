import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainerLogin = styled.div`
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
  margin: auto auto;

  > h2 {
    color: white;
    font-size: 26px;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonLogin = styled.button`
  background-color: var(--button-initial);
  padding: 16px 0;
  border-radius: 8px;
  color: white;

  font-family: "Roboto Slab";
  font-weight: 500;
  font-size: 16px;

  transition: .4s ease;

  :hover {
    background-color: var(--primary-color);
  }
`;

export const LinkCreateAccount = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: .4s ease;

  :hover {
    color: var(--gray-20);
  }
`;
