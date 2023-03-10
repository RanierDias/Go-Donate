import styled from "styled-components";

const ModalBackground = styled.div`
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

    > div:first-child {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 250px;
      padding: 12px;
      color: var(--white);
      background-color: var(--gray-80);

      > button {
        position: absolute;
        top: 12px;
        right: 12px;
        color: var(--white);
        background-color: transparent;

        > svg {
          height: 20px;
          width: 20px;
        }
      }
    }
  }
`;

export default ModalBackground