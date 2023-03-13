import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 235px;
  padding: 25px 20px;
  border-radius: 12px;
  background-color: var(--gray-80);

  > h2 {
    color: var(--white);
    font-size: 1rem;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    font-size: .9rem;

    > div {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        min-width: 24px;
        color: var(--primary-color);
      }

      p {
        max-width: 100%;
        color: var(--gray-20);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }

  > p {
    color: var(--white);
  }

  @media (min-width: 769px) {
      h2 {
      color: var(--white);
      font-size: 1rem;
    }

    p {
      font-size: .8rem;
    }
  }
`

export default Div;
