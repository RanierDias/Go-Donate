import { IoClose } from "react-icons/io5";
import ButtonMain from "../../../styles/buttonMain";
import FormParticipation from "../../ModalForm/Participation";
import ModalBackground from "../style";
import { iModalUser } from "./types";

const ModalUser = ({ callback, selectedPost }: iModalUser) => {
  return (
    <ModalBackground>
      <div>
        <div>
          <h1>Teste</h1>
          <button onClick={() => callback(null)}>
            <IoClose />
          </button>
        </div>

        <FormParticipation post={selectedPost} />
      </div>
    </ModalBackground>
  );
};

export default ModalUser;
