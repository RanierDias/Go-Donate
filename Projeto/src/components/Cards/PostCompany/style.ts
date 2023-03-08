import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 250px;
  padding: 25px 20px;
  border-radius: 12px;
  background-color: var(--gray-80);

  > h2 {
    color: var(--white);
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

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
`;

export default Div;
