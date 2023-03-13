import styled from "styled-components";

export const ContainerMobile = styled.div`
  width: max-content;
  margin: 0 auto;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const ContainerMain = styled.div`
  display: none;
  width: max-content;
  margin: 0 auto;

  @media (min-width: 769px) {
    display: block;
  }
`;