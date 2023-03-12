import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  h1 {
    font-size: 1.2rem;
    color: var(--gray-80);
  }

  > div {
    display: flex;
    flex-direction: column-reverse;

    section {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > h2 {
        font-size: 1.1rem;
        color: var(--gray-30);
      }

      > ul {
        overflow-y: auto;

        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
      }
    }

    aside {
      display: flex;
      flex-direction: column;

      align-items: center;
      height: max-content;

      > div:first-child {
        margin-bottom: 1rem;
      }
    }
  }

  @media (min-width: 769px) {
    margin: 0 3rem;

    section {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }

    > div {
      flex-direction: row;
      justify-content: space-between;

    ul {
      display: flex;
      flex-wrap: wrap;
    }

      aside {
        align-items: flex-end;

        position: sticky;
        top: 1rem;

        margin-left: 1rem;
      }
    }
  }

  @media (min-width: 796px) {
    margin: 0 8.5rem;
  }
`;

export default Main;
