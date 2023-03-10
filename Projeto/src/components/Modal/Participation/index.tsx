import { IoClose } from "react-icons/io5";
import ButtonMain from "../../../styles/buttonMain";
import FormParticipation from "../../ModalForm/Participation";

import ModalBackground from "../style";
import { iModalUser } from "./type";

const ModalUser = ({ callback, selectedCard }: iModalUser) => {
  return (
    <ModalBackground>
      <div>
        <div>
          <h1>Teste</h1>
          <button onClick={() => callback(null)}>
            <IoClose />
          </button>
        </div>

        <FormParticipation post={selectedCard} />
      </div>
    </ModalBackground>
  );
};

export default ModalUser;
