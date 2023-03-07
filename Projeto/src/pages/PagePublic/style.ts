import styled from 'styled-components';

export const MainContainer = styled.main`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 700px) {
    padding: 1rem 4rem;
  }

  @media(min-width: 1024px) {
    padding: 1rem 12vw;
  }
`
export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.1rem;
  }

  input {
    border-radius: 4px;
    border: none;

    background-color: var(--inputs-color);

    padding: .8rem 1.1rem;

    color: var(--white);
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h3 {
      font-size: 1.4rem;
    }
  }
`

export const DonateSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font-size: .9rem;
  }

  @media (min-width: 700px) {
    h4 {
      font-size: 1rem;
    }
  }
`

export const ListCardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const DateContainer = styled.div`
  display: flex;
  gap: .5rem;

  span {
    color: var(--primary-color);
    font-size: .7rem;
  }
`

export const CardPublic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 10px;
  background-color: var(--gray-80);

  padding: 1.2rem 1.5rem;

  p {
    font-size: .6rem;
    color: var(--white);
  }

  @media (min-width: 700px) {
    p {
      font-size: .77rem;
    }
  }
`

export const UserContainer = styled.div`
  display: flex;
  gap: .3rem;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  h3 {
    font-size: .7rem;
    color: var(--white);
  }

  span {
    font-size: .6rem;
    color: var(--white);
  }
`

export const InfoEvent = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  span {
    color: var(--gray-20);

    font-size: .7rem;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`