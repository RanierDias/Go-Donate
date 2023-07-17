import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { IDonate } from "../../../providers/@types";
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
            <h2>Campanha: {selectedCard.post.title}</h2>
            <span>{selectedCard.post.date}</span>
            <p>Atendimentos:</p>
            <span>
              {selectedCard.post.open_time}am ás {selectedCard.post.close_time}
              pm
            </span>

            <p>Contato:</p>
            <span>{selectedCard.post.phone}</span>
          </div>
          <p>{selectedCard.post.description} </p>
          <ButtonMain onClick={handleRemoveParticipation}>
            Cancelar Participação
          </ButtonMain>
        </ModalParticpation>
      </div>
    </ModalBackground>
  );
};

export default ModalUser;
