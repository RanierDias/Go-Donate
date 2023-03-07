import styled from "styled-components";

const Main = styled.main`
  h1 {
    margin-top: 45px;
  }

  > div {
    display: flex;
    margin-top: 45px;

    aside {
      > div:first-child {
        margin-bottom: 75px;
      }
    }
  }

  @media (min-width: 1024px) {
    margin: 0 180px;
  }
`;

export default Main