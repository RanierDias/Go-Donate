import { IoClose } from 'react-icons/io5'
import ButtonMain from '../../../styles/buttonMain'
import DonationForm from '../../ModalForm/DonationForm'
import FormFundraising from '../../ModalForm/Fundraising'
import { iModalCompany } from '../Company/types'

function DonationModal({ callback }: iModalCompany) {
  // const { setTypeModal } = useContext(UserContext)

  return (
      <section>
        <div>
          <div>
            <h1>Teste</h1>
            <button onClick={callback}>
              <IoClose />
            </button>
          </div>
          
        {/* <FormFundraising /> */}
        <DonationForm />

          <div>
            <ButtonMain color="white" background="button-cancel">
              Cancelar Evento
            </ButtonMain>
            <ButtonMain color="white" background="primary-color">
              Alterar evento
            </ButtonMain>
          </div>
        </div>
      </section>
    )
}

export default DonationModal