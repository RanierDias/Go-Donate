import styled from "styled-components";

interface iButton {
  color?: string;
  background?: string;
  hover?: {
    color: string;
    background: string;
  };
}

const ButtonMain = styled.button<iButton>`
  padding: 8px 20px;
  color: var(--${(props) => (props.color ? props.color : "white")});
  border-radius: 8px;
  font-weight: 600;
  background-color: var(
    --${(props) => (props.background ? props.background : "primary-color")}
  );

  transition: .4s ease;

  :hover {
    color: var(
      --${(props) => (props.hover?.color ? props.hover.color : "primary-color")}
    );
    background-color: var(
      --${(props) => (props.hover?.background ? props.hover.background : "white")}
    );
  }
`;

export default ButtonMain;
