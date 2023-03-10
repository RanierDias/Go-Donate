import { useContext, useState } from 'react'
import Navbar from '../../../components/Header'
import ModalCompany from '../../../components/Modal/Company'
import { UserContext } from '../../../providers/UserContext'
import { DonateInputSearch, DonationCart, DonationList, MainDonationContainer } from './style'

const Donation = () => {
  const { setTypeModal } = useContext(UserContext)
  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      { modal && <ModalCompany callback={handleModal}/> }
      <Navbar mode="public" />
      <MainDonationContainer>
        <DonateInputSearch>
          <h2>Campanhas de doações</h2>
          <div>
            <input type="text" placeholder='Pesquisar participantes'/>
            <button onClick={() => {setModal(!modal); setTypeModal('createModal')}}>Adicionar evento</button>
          </div>
        </DonateInputSearch>

        <DonationList>
          <DonationCart>
            <h3>Natal para todos</h3>
            <span>25/12/2022 - 20:30</span>
            <p>Some description here. Location there, and bla bla bla</p>
            <button onClick={() => setModal(!modal) }>Alterar Evento</button>
          </DonationCart>

          <DonationCart>
            <h3>Natal para todos</h3>
            <span>25/12/2022 - 20:30</span>
            <p>Some description here. Location there, and bla bla bla</p>
            <button>Alterar Evento</button>
          </DonationCart>

          <DonationCart>
            <h3>Natal para todos</h3>
            <span>25/12/2022 - 20:30</span>
            <p>Some description here. Location there, and bla bla bla</p>
            <button>Alterar Evento</button>
          </DonationCart>

          <DonationCart>
            <h3>Natal para todos</h3>
            <span>25/12/2022 - 20:30</span>
            <p>Some description here. Location there, and bla bla bla</p>
            <button>Alterar Evento</button>
          </DonationCart>

          <DonationCart>
            <h3>Natal para todos</h3>
            <span>25/12/2022 - 20:30</span>
            <p>Some description here. Location there, and bla bla bla</p>
            <button>Alterar Evento</button>
          </DonationCart>

          <DonationCart>
            <h3>Natal para todos</h3>
            <span>25/12/2022 - 20:30</span>
            <p>Some description here. Location there, and bla bla bla</p>
            <button>Alterar Evento</button>
          </DonationCart>
        </DonationList>
      </MainDonationContainer>
    </>
  )
}

export default Donation