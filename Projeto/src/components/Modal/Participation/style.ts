import { Modal } from "@material-ui/core";
import styled from "styled-components";

const ModalParticpation = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #21212150;

  > div {
    max-width: 900px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  > button {
    position: absolute;
    top: 12px;
    right: 12px;
    color: var(--white);
    background-color: transparent;

    > img {
      height: 20px;
      width: 20px;
    }
  }
`;
