import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { iFundraising } from "../../../providers/@types";
import { ModalContext } from "../../../providers/ModalContext";
import ButtonMain from "../../../styles/buttonMain";
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
          <section>
            <img src={selectedCard.image} alt="Imagem Participação" />
            <div>
              <h2>{selectedCard.name}</h2>
              <span>
                {selectedCard.city} - {selectedCard.state}
              </span>
            </div>
          </section>
          <div>
            <h2>{selectedCard.title}</h2>
            <span>{selectedCard.date}</span>
            <span>
              {selectedCard.open_time} - {selectedCard.close_time}
            </span>
            <span>{selectedCard.phone}</span>
          </div>
          <h3>{selectedCard.description} </h3>
        </ModalParticpation>
        <ButtonMain>Cancelar Participação</ButtonMain>
      </div>
    </ModalBackground>
  );
};

export default ModalUser;
