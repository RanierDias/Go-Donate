import { FaFingerprint, FaLeaf } from 'react-icons/fa'
import Charity from '../../../assets/Charity.gif'
import { ButtonHome, MainContainerHome } from './style'
import { Link } from "react-router-dom"

const Home = () => {

  return (
    <MainContainerHome>
      <header>
        
        <ButtonHome><Link to='/'>Ver Campanhas <FaLeaf /></Link></ButtonHome>
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
      
      <ButtonHome><Link to='/login'>Go.Donate <FaFingerprint /></Link></ButtonHome>
    </MainContainerHome>
  )
}

export default Home