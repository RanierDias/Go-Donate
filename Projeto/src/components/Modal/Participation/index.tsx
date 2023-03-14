import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { iFundraising } from "../../../providers/@types";
import { ModalContext } from "../../../providers/ModalContext";
import ModalBackground from "../style";
import ModalParticpation from "./style";

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

        <ModalParticpation>
          <div>
            <img src={selectedCard.image} alt="Imagem Participação" />
            <h2>{selectedCard.name}</h2>
            <span>
              {selectedCard.city} - {selectedCard.state}
            </span>
          </div>
          <h2>{selectedCard.title}</h2>
          <div>
            <span>{selectedCard.date}</span>
            <span>
              {selectedCard.open_time} - {selectedCard.close_time}
            </span>
            <span>{selectedCard.phone}</span>
          </div>
          <h3>{selectedCard.description} </h3>
        </ModalParticpation>
      </div>
    </ModalBackground>
  );
};

export default ModalUser;
