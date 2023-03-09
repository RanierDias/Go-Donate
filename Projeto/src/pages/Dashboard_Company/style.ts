import styled from "styled-components";

const Main = styled.main`
  h1 {
    margin-top: 45px;
  }

  > div {
    display: flex;
    flex-direction: column-reverse;
    gap: 25px;
    margin-top: 45px;

    section {
      > h2 {
        margin-bottom: 15px;
      }

      > ul {
        display: flex;
        flex-wrap: wrap;
        gap: 45px;
        margin-bottom: 40px;
      }
    }

    aside {
      position: sticky;
      top: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: max-content;

      > div:first-child {
        margin-bottom: 75px;
      }
    }
  }

  @media (min-width: 1024px) {
    margin: 0 160px;

    > div {
      flex-direction: row;

      aside {
        align-items: flex-end;
      }
    }
  }
`;

export default Main;
