import styled from "styled-components"

export const EventUserContainer = styled.main`
   padding: 1rem;

   @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;

    padding: 1rem 8.4rem;
   }
`

export const SearchContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  padding: 1rem;

  input {
    padding: 0.6rem 1.1rem;
    border-radius: 10px;

    color: var(--white);
    background-color: var(--inputs-color);
    border: none;

    :hover {
      background-color: var(--gray-80);
    }
  }

  @media (min-width: 700px) {
    padding: 1rem 8.5rem;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ListCardsUser = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;

    gap: 1rem 2rem;
  }
`

export default EventUserContainer
