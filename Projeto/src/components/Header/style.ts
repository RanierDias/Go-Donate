import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 5vw;
  background-color: var(--gray-80);

  div {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  @media(min-width: 720px) {
    padding: 0 8vw;
  }

  @media(min-width: 1024px) {
    padding: 0 12vw;
  }
`

export default Header