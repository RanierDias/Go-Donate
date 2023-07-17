import { FaFingerprint, FaLeaf } from 'react-icons/fa'
import Charity from '../../../assets/Charity.gif'
import { ButtonLink, MainContainerHome } from './style'

const Home = () => {

  return (
    <MainContainerHome>
      <header>
        <ButtonLink to='/login'>Go.Donate <FaFingerprint /></ButtonLink>
      </header>
      <section>
        <div>
          <aside>
            <h1>Seja a razão</h1>
            <h2>que faz alguém sorrir hoje!</h2>
          </aside>
          <p>"A medida da vida não é a sua duração, mas a sua doação." - Peter Marshal </p>
        </div>
        <figure>
          <img src={Charity} />
        </figure>
      </section>
      <ButtonLink to='/public'>Ver Campanhas <FaLeaf /></ButtonLink>
    </MainContainerHome>
  )
}

export default Home