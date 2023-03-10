import styled from "styled-components";

export const MainContainerHome = styled.main`
  padding: 1rem;

  header {
    display: flex;
    justify-content: flex-end;
  }
  
  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    position: relative;

    padding: 2rem 0;

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      aside {
        display: flex;
        flex-direction: column;

        h1 {
          color: var(--primary-color);
          font-size: 2.7rem;
        }

        h2 {
          /* color: var(--button-initial); */
          color: #D47706;
          font-size: 1.4rem;
        }
      }

      p {
        font-size: .6rem;
        color: var(--gray-20);

        font-family: sans-serif;
      }

      @media (min-width: 769px) {
        div {
          width: 40%;
        }
        aside {
          h1 {
            font-size: 4rem;
          }

          h2 {
            font-size: 2.2rem;
          }
        }

        p {
          font-size: .9rem;
        }
      }
    }

    @media (min-width: 769px) {
      display: flex;
      flex-direction: row;
    }
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    img {
      width: 70%;
    }

    @media (min-width: 769px) {
      width: 70%;
      margin: 0;
    }
  }

  @media (min-width: 769px) {
    padding: 2rem 12vw;
  }
`

export const ButtonHome = styled.button`
  /* background-color: var(--primary-color); */
  color: var(--white);

  display: flex;
  gap: .8rem;
  align-items: center;

  padding: .7rem 1rem;

  border-radius: 18px;

  cursor: pointer;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background: rgb(18,135,110);
  background: linear-gradient(339deg, rgba(18,135,110,1) 20%, rgba(53,117,56,1) 80%);

  :hover {
    background-color: white;
    /* border: 2px solid linear-gradient(339deg, rgba(18,135,110,1) 20%, rgba(53,117,56,1) 80%)ç */
  }

  @media (min-width: 769px) {
    padding: .9rem 1.6rem;

    font-size: 1.1rem;
  }
`