import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  min-width: 200px;
  width: max-content;
  padding: 12px 16px;
  margin: 16px auto;
  color: var(--white);
  border-radius: 12px;
  background-color: var(--gray-80);

  > div:first-child {
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

  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 4px;

    > h3 {
      color: var(--gray-20);
    }

    > small {
      font-size: 12px;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export default Div;
