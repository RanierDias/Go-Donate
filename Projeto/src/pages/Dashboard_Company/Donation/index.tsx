import { useEffect, useState } from 'react'
import Navbar from '../../../components/Header'
import { api } from '../../../services/api'
import { DonateInputSearch, DonationCart, DonationList, MainDonationContainer } from './style'

interface IDonate {
  uuidCompany: string
  uuidUser: string
  id: number
  postId: number
  role: string
  participated: string
}

const Donation = () => {
    const [donations, setDonations] = useState<IDonate[]>([])
    
    useEffect(() => {
      const token = localStorage.getItem('@userToken')
      
      const getDonations = async () => {
        try {
          const res = await api.get('/donation', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          
          setDonations(res.data)
          console.log(res.data)
          console.log(donations)

        } catch (error) {
          
          console.log(error)
          
      }
    }
    getDonations()
    }, [])
  

  return (
    <>
      <Navbar mode="public" />
      <MainDonationContainer>
        <DonateInputSearch>
          <h2>Campanhas de doações</h2>
          <div>
            <input type="text" placeholder='Pesquisar participantes'/>
            <button>Adicionar evento</button>
          </div>
        </DonateInputSearch>

        <DonationList>
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