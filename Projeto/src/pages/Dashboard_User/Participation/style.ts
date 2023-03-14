import styled from "styled-components";

export const SectionParticipationContainer = styled.main`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 1rem;
  }

  @media (min-width: 769px) {
    padding: 1rem 8.7rem;

    h1 {
      font-size: 1.4rem;
    }
  }
`

export const ContainerListParticipation = styled.ul`

  @media (min-width: 769px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`