import { Modal } from "@material-ui/core";
import styled from "styled-components";

const ModalParticpation = styled.main`
  display: flex;
  flex-direction: column;
  background: beige;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80%;
  padding: 22px;
  gap: 30px;
  background-color: gray;

  section {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  button {
    float: right;
    top: 12px;
    right: 12px;
    color: var(--white);
    background-color: transparent;
  }
`;

export default ModalParticpation;
