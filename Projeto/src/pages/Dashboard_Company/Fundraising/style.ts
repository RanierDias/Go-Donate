import styled from "styled-components";

const Main = styled.main`
  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 45px 0;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 25px;
    }
  }

  > section {
    > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 45px;
    }
  }
  
  @media (min-width: 1024px) {
    padding: 0 12vw;
  }
`;

export default Main;
