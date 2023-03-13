import styled from "styled-components";

const StyleCardParticipation = styled.div`
  width: 250px;
  height: 350px;

  gap: 8px;

  padding: 25px 20px;
  border-radius: 12px;
  background-color: var(--gray-80);
  color: var(--white);
  font-size: 0.7rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  > h2 {
    color: var(--white);
  }

  p {
    font-size: 0.77rem;
    font-weight: 300;
  }
`;

export default StyleCardParticipation;
