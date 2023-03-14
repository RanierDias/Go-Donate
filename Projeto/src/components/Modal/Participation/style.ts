import { Modal } from "@material-ui/core";
import styled from "styled-components";

const ModalParticpation = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 80%;
  padding: 22px;
  gap: 30px;
  background-color: var(--white);

  section {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

  }
  p {
    font-size: .9rem;
    color: var(--gray-30);
  }
  
  button {
    float: right;

    top: 12px;
    right: 12px;

    max-width: max-content;

    color: var(--white);
    background-color: var(--button-cancel);
  }
`;

export default ModalParticpation;
