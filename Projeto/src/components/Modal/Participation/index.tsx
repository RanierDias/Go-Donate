import axios from "axios";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import Donation from "../../../pages/Dashboard_Company/Donation";
import { IDonate, iFundraising } from "../../../providers/@types";
import { ModalContext } from "../../../providers/ModalContext";
import { PostContext } from "../../../providers/PostContext";
import ButtonMain from "../../../styles/buttonMain";
import ModalBackground from "../style";
import ModalParticpation from "./style";

const ModalUser = () => {
  const { setShowModal } = useContext(ModalContext);
  const { selectedCard }: { selectedCard: iFundraising } =
    useContext(ModalContext);

  const { donations, setDonations } = useContext(PostContext);

  const removeParticipation = async (fundraisingId: number) => {
    try {
      const response = await axios.delete(`donation/${fundraisingId}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao remover participação: ", error);
    }
  };

  const handleRemoveParticipation = async () => {
    try {
      const response = await removeParticipation(selectedCard.id);
      const filterParticipation = donations.filter(
        (donation) => donation.id != selectedCard.id
      );

      setDonations(filterParticipation);
      setShowModal(null);
    } catch (error) {
      console.error("Erro ao remover participação: ", error);
    }
  };

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
        <ButtonMain onClick={handleRemoveParticipation}>
          Cancelar Participação
        </ButtonMain>
      </div>
    </ModalBackground>
  );
};

export default ModalUser;
