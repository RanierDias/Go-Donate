import styled from "styled-components";

interface iButton {
  color?: string;
  background?: string;
  hover?: {
    color: string;
    background: string;
  };
}

const ButtonSmall = styled.button<iButton>`
  padding: 10px 12px;
  color: var(--${(props) => (props.color ? props.color : "white")});
  border-radius: 8px;
  background-color: var(
    --${(props) => (props.background ? props.background : "primary-color")}
  );

  :hover {
    color: var(
      --${(props) => (props.hover?.color ? props.hover.color : "primary-color")}
    );
    background-color: var(
      --${(props) => (props.hover?.background ? props.hover.background : "white")}
    );
  };
`;

export default ButtonSmall;
