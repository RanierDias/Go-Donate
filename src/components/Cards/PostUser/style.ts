import styled from "styled-components";

const StyleCardUser = styled.div`
  display: flex;
  flex-direction: column;
 
  gap: 20px;
  
  padding: 25px 20px;
  border-radius: 12px;
  background-color: var(--gray-80);
  color: var(--white);
  font-size: .7rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  > h2 {
    color: var(--white);
  }

  p {
    font-size: .77rem;
    font-weight: 300;
  }

  @media (min-width: 769px) {
    width: 290px;
  }
`

export default StyleCardUser