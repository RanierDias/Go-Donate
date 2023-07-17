import styled from "styled-components";

export const MainDonationContainer = styled.main`
  padding: 1rem;

  @media (min-width: 700px) {
    padding: 1rem 4rem;
  }

  @media(min-width: 1024px) {
    padding: 1rem 10.5vw;
  }
`

export const DonateInputSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;

  padding: 1rem;

  h2 {
    font-size: .9rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: .5rem;

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
    
    button {
      display: flex;
      align-items: center;
      gap: .4rem;
      
      border-radius: 10px;
      padding: .6rem 1rem;
      background-color: var(--primary-color);

      transition: .2s ease;
      
      color: var(--white);

      :hover {
        background-color: var(--white);

        color: var(--primary-color);
      }
    }
  }

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;

    div {
      flex-direction: row;
    }

    h2 {
        font-size: 1.4rem;
        color: var(--gray-20);
      }
  }
`
export const DonationList = styled.ul`
  overflow-x: auto;

  display: flex;
  gap: .7rem;

  padding: 1rem;

  @media (min-width: 700px) {
    flex-wrap: wrap;
    gap: 2rem;
  }
`

export const DonationCart = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  flex-shrink: 0;

  border-radius: 12px;

  padding: 1.5rem;
  width: 250px;

  background-color: var(--gray-80);
  color: var(--gray-20);

  font-size: .7rem;
  
  h3 {
    color: var(--white);
    font-size: 1rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: .4rem;
    
    border-radius: 10px;
    padding: .6rem 1.8rem;

    background-color: var(--primary-color);

    color: var(--white);
    font-size: .7rem;

    transition: .2s ease;

    :hover {
      background-color: var(--white);

      color: var(--primary-color);
    }
  }

  transition: .1s ease;

  :hover {
    background-color: var(--gray-60);
    color: var(--white);

    width: 310px;
  }

  @media (min-width: 700px) { 
    width: 300px;
    height: fit-content;

    button {
      margin: 0 auto;
      width: 170px;

      font-size: .8rem;
    }
  }
`