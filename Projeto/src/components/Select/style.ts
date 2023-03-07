import styled from "styled-components";

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: max-content;
  height: max-content;
  color: var(--white);

  > select {
    outline: none;
    appearance: none;
    width: 220px;
    padding: 12px 16px;
    border: none;
    border-radius: 12px;
    color: var(--white);
    background-color: var(--gray-80);
  }

  > svg {
    position: absolute;
    right: 16px;
  }
`;

export default Div