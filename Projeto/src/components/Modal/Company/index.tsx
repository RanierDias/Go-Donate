import { IoClose } from "react-icons/io5";
import ButtonMain from "../../../styles/buttonMain";
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
        <main>
          <div>
            <div>
              <label htmlFor="teste1">Teste 1</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="teste2">Teste 2</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="teste3">Teste 3</label>
              <input type="text" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="teste4">Teste 4</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="teste5">Teste 5</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="teste6">Teste 6</label>
              <input type="text" />
            </div>
          </div>
        </main>

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
