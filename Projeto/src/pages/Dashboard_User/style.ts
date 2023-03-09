import styled from "styled-components";

export const EventUserContainer = styled.main`
  padding: 1rem;
  display: flex;
  gap: 100px;
  


  ul{
    gap: 60px;
    display: flex;
    flex-direction: column;
  }
  button{
    width: 30%;
  }

  aside{
    display: flex;
    flex-direction: column;
    gap: 70px;
  }

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
    padding: 1rem 4rem;
  }

  @media(min-width: 1024px) {
    padding: 1rem 10.5vw;
  }`

export default EventUserContainer
