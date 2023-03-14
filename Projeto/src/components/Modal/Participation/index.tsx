import axios from "axios";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import Donation from "../../../pages/Dashboard_Company/Donation";
import { IDonate, iFundraising } from "../../../providers/@types";
import { ModalContext } from "../../../providers/ModalContext";
import { PostContext } from "../../../providers/PostContext";
import { api } from "../../../services/api";
import ButtonMain from "../../../styles/buttonMain";
import ModalBackground from "../style";
import ModalParticpation from "./style";

const ModalUser = () => {
  const { setShowModal } = useContext(ModalContext);
  const { selectedCard }: { selectedCard: IDonate } = useContext(ModalContext);

  const { donations, setDonations } = useContext(PostContext);

  const removeParticipation = async () => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.delete(`donation/${selectedCard.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Erro ao remover participação: ", error);
    }
  };

  const handleRemoveParticipation = async () => {
    try {
      await removeParticipation();
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
          <h1>{selectedCard.post.title}</h1>
          <button onClick={() => setShowModal(null)}>
            <IoClose />
          </button>
        </div>

        <ModalParticpation>
          <section>
            <img src={selectedCard.post.image} alt="Imagem Participação" />
            <div>
              <h2>{selectedCard.post.name}</h2>
              <span>
                {selectedCard.post.city} - {selectedCard.post.state}
              </span>
            </div>
          </section>
          <div>
            <h2>{selectedCard.post.title}</h2>
            <span>{selectedCard.post.date}</span>
            <span>
              {selectedCard.post.open_time} - {selectedCard.post.close_time}
            </span>
            <span>{selectedCard.post.phone}</span>
          </div>
          <h3>{selectedCard.post.description} </h3>
        </ModalParticpation>
        <ButtonMain onClick={handleRemoveParticipation}>
          Cancelar Participação
        </ButtonMain>
      </div>
    </ModalBackground>
  );
};

export default ModalUser;
