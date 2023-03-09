import { IoClose } from "react-icons/io5";
import ButtonMain from "../../../styles/buttonMain";
import FormFundraising from "../../ModalForm/Fundraising";
import ModalBackground from "../style";
import { iModalCompany } from "./types";

const ModalCompany = ({ callback }: iModalCompany) => {
  return (
    <ModalBackground>
      <div>
        <div>
          <h1>Teste</h1>
          <button onClick={callback}>
            <IoClose />
          </button>
        </div>
        
        <FormFundraising />

        <div>
          <ButtonMain color="white" background="button-cancel">
            Cancelar Evento
          </ButtonMain>
          <ButtonMain color="white" background="primary-color">
            Alterar evento
          </ButtonMain>
        </div>
      </div>
    </ModalBackground>
  );
};

export default ModalCompany;
