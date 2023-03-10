import { isAxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import CardParticipation from "../../../components/Cards/PostUser/Participation";
import { api } from "../../../services/api";
import Navbar from "../../../components/Header";
import ModalCompany from "../../../components/Modal/Company";
import ModalUser from "../../../components/Modal/Participation";
import { iFundraising } from "../../Dashboard_Company/types";
import { CompanyContext } from "../../../providers/CompanyContext";

const PageParticipations = () => {
  const { fundraising, setFundraising, selectedCard, setSelectedCard, showModal, setShowModal } = useContext(CompanyContext);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhYmlvemV6ZUBtYWlsLmNvbSIsImlhdCI6MTY3ODQ2MDQyMiwiZXhwIjoxNjc4NDY0MDIyLCJzdWIiOiIzIn0.EwUNWNobuHAFFqgSbr1b6ocvQiqt8wimLP_ff6PB6H4";

  useEffect(() => {
    async function getListCards() {
      try {
        const response = await api.get<iFundraising[]>("/participation", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setFundraising(response.data);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error.message);
        }

        console.log(error);
      }
    }
    getListCards();
  }, []);

  const handleCardClick = (card: iFundraising) => {
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
            {fundraising.map((card) => (
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
        <ModalUser callback={setShowModal} selectedCard={selectedCard} /> //refatorar tirando essas props do modal e usando o useContext!
      )}
    </>
  );
};

export default PageParticipations;
