import styled from "styled-components";

const Div = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  width: 250px;
  padding-bottom: 12px;
  font-size: 0.875rem;
  color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--gray-80);

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  .perfil {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--gray-30);

    img {
      width: 100%;
    }

    .perfil__thumb {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 86px;
      width: 100%;
      margin-bottom: 60px;
      overflow: hidden;
    }

    .perfil__photo {
      position: absolute;
      top: 30px;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .event--perfil {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 6px 12px;
    margin-top: 16px;

    :hover {
      cursor: pointer;
      background-color: var(--gray-60);
    }

    span {
      align-self: flex-end;
      translate: 0 -20px;
    }
  }

  @media(min-width: 769px) {
    display: flex;
  }
`;

export default Div