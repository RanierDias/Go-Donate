import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import CardParticipation from "../../../components/Cards/PostUser/Participation";
import { api } from "../../../services/api";
import { iParticipation } from "../types";
import Navbar from "../../../components/Header";
import ModalCompany from "../../../components/Modal/Company";
import ModalUser from "../../../components/Modal/Participation";

const PageParticipations = () => {
  const [cards, setCards] = useState([] as iParticipation[]);
  const [selectedCard, setSelectedCard] = useState({} as iParticipation);
  const [showModal, setShowModal] = useState<null | string>(null);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhYmlvemV6ZUBtYWlsLmNvbSIsImlhdCI6MTY3ODQ2MDQyMiwiZXhwIjoxNjc4NDY0MDIyLCJzdWIiOiIzIn0.EwUNWNobuHAFFqgSbr1b6ocvQiqt8wimLP_ff6PB6H4";

  useEffect(() => {
    async function getListCards() {
      try {
        const response = await api.get<iParticipation[]>("/participation", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCards(response.data);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error.message);
        }

        console.log(error);
      }
    }
    getListCards();
  }, []);

  const handleCardClick = (card: iParticipation) => {
    setSelectedCard(card);
    setShowModal("close");
  };

  return (
    <>
      <Navbar mode="private" />
      <main>
        <div>
          <h1>Campanhas em Participação</h1>
        </div>

        <section>
          <ul>
            {cards.map((card) => (
              <CardParticipation
                key={card.id}
                post={card}
                callback={setShowModal}
                setSelectedCard={setSelectedCard}
              />
            ))}
          </ul>
        </section>
      </main>

      {showModal == "open" && (
        <ModalUser callback={setShowModal} selectedCard={selectedCard} />
      )}
    </>
  );
};

export default PageParticipations;
