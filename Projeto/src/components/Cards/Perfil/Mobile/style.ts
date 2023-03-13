import styled from "styled-components";

const Div = styled.div`
  min-width: 200px;
  max-width: 300px;
  padding: 12px;
  margin: 16px auto;
  color: var(--white);
  border-radius: 12px;
  background-color: var(--gray-80);

  > div:first-child {
    display: flex;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      width: 50px;
      margin-right: 12px;
      border-radius: 50%;
      overflow: hidden;

      > img {
        height: 100%;
      }
    }
  }

  > div:last-child {
    display: flex;
    justify-content: space-around;
    gap: 12px;
    margin-top: 8px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export default Div;
