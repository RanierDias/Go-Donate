import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  h1 {
    font-size: 1.2rem;
    color: var(--gray-80);
    text-align: center;
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

        @media (min-width: 769px) {
          gap: 1.7rem;
        }
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

      > ul {
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;
      }
    }

    > div {
      flex-direction: row;
      justify-content: space-between;

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

    h1 {
      text-align: left;
    }
  }
`;

export const ContainerButtonCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: .7rem;

  padding: .6rem 0;
`

export const ButtonToSee = styled(Link)`
  display: flex;
  align-items: center;
  gap: .2rem;
  background-color: var(--primary-color);

  color: var(--white);
  font-size: .9rem;

  padding: .8rem;

  border-radius: 10px;

  transition: .4s ease;

  :hover {
    background-color: var(--button-initial);
  }
`

export default Main;
