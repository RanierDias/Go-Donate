import styled from "styled-components";

const Main = styled.main`
  > div:first-child {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    margin: 45px 0;

    h1 {
      text-align: center;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }
  }

  > section {
    > ul {
      display: flex;
      gap: 45px;
      width: 90%;
      margin: 0 auto;
      overflow-x: scroll;
    }
  }
  
  @media (min-width: 1024px) {
    padding: 0 12vw;

    > div:first-child {
      flex-direction: row;

      h1 {
        text-align: start;
      }

      > div {
        flex-direction: row;
        gap: 24px;
      }
    }

    > section {
      > ul {
        width: 100%;
        flex-wrap: wrap;
        overflow-x: hidden;
      }
    }
  }
`;

export default Main;
