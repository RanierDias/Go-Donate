import styled from "styled-components";

interface iButton {
  background: string;
}

const ButtonMain = styled.button`
  padding: 8px 20px;
  color: var(--${(props) => props.color});
  border-radius: 8px;
  font-weight: 600;
  background-color: var(--${(props: iButton) => props.background});
`;

export default ButtonMain;
