import styled from "styled-components";

export const ContainerMobileCard = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
`

const Div = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
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
    border: 2px solid white;

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
      font-size: .7rem;
    }

    > small {
      font-size: .6rem;
    }

    @media (min-width: 769px) {
      gap: 1rem;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export default Div;
