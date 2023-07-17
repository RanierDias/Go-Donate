import styled from "styled-components";

const StyleCardParticipation = styled.main`
  padding: 1rem 0;

  @media (min-width: 769px) {
    /* padding: 1rem 8.7rem; */
  }
`
export const SectionUserParticipation = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  border-radius: 12px;
  background-color: var(--gray-80);
  color: var(--white);
  font-size: 0.7rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  h2 {
    color: var(--white);
    font-size: 1rem;
  }

  p {
    font-size: 0.77rem;
    font-weight: 300;
    color: var(--primary-color);
  }

  span {
    color: var(--gray-20);
  }

  span, p {
    display: flex;
    align-items: center;
    gap: .4rem;
  }

  @media (min-width: 769px) {
    width: 300px;
  }
`

export const InfoUser = styled.div`
    display: flex;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: column;
      gap: .3rem;

      color: var(--gray-20);
    }
`

export default StyleCardParticipation;
