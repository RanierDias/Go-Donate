import styled from "styled-components";

const Main = styled.main`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1024px) {
    padding: 1.7rem 12vw;
    justify-content: space-between;
    align-items: stretch;
  }
`
export const ContainerSearchAndButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: .9rem;
    color: var(--gray-20);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;

    h1 {
      font-size: 1.1rem;
    }

    div {
      flex-direction: row;
    }
  }
`

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
`

export const ListOfCards = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: .6rem;

  height: 100vh;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;

    height: max-content;
  }
`

export default Main
