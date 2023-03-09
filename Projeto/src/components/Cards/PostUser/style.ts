import styled from "styled-components";

const StyleCardUser = styled.div`
  display: flex;
  flex-direction: column;
 
  gap: 20px;
  
  padding: 25px 20px;
  border-radius: 12px;
  background-color: var(--gray-80);

  img{
    width: 50px;
    height: 50px;
  }

  > h2 {
    color: var(--white);
  }`
export default StyleCardUser