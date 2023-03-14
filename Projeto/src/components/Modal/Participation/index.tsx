import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { iFundraising } from "../../../providers/@types";
import { ModalContext } from "../../../providers/ModalContext";
import ModalBackground from "../style";

const ModalUser = () => {
  const { setShowModal } = useContext(ModalContext);
  const { selectedCard }: { selectedCard: iFundraising } =
    useContext(ModalContext);

  return (
    <ModalBackground>
      <div>
        <div>
          <h1>{selectedCard.title}</h1>
          <button onClick={() => setShowModal(null)}>
            <IoClose />
          </button>
        </div>

        <div>
          {" "}
          // fazer um styled div aqui!
          <p>{selectedCard.description}</p>
        </div>
      </div>
    </ModalBackground>
  );
};

export default ModalUser;
