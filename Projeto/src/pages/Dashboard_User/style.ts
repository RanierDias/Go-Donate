import styled from "styled-components";

export const EventUserContainer = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ul {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  aside{
    display: flex;
    flex-direction: column;
    gap: 70px;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    padding: 1rem 4rem;
     
    button {
      width: 30%;
    }
  }

  @media(min-width: 1024px) {
    padding: 1rem 10.5vw;
}`

export const SearchContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: .7rem;
  
  padding: 1rem;

  input {
    padding: .6rem 1.1rem;
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

export default EventUserContainer
