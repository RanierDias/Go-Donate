import { isAxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import CardParticipation from "../../../components/Cards/PostUser/Participation";
import { api } from "../../../services/api";
import Navbar from "../../../components/Header";
import { CompanyContext } from "../../../providers/CompanyContext";
import { UserContext } from "../../../providers/UserContext/UserContextInitial";
import ModalUser from "../../../components/Modal/Participation";
import { ContainerListParticipation, SectionParticipationContainer } from "./style";

const PageParticipations = () => {
  const {
    donations,
    setDonations,
    selectedCard,
    setSelectedCard,
    showModal,
    setShowModal,
  } = useContext(CompanyContext);

  useEffect(() => {
    async function getCardParticipants() {
      try {
        const token = localStorage.getItem("@TOKEN");
        const userId = localStorage.getItem("@UserId");
        const response = await api.get(`users/${userId}?_embed=donation`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDonations(response.data.donation);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error);
        }
        console.log(error);
      }
    }
    getCardParticipants();
  }, []);

  // const handleCardClick = (card) => {
  //   setSelectedCard(card);
  //   setShowModal("close");
  // };

  return (
    <>
      <Navbar mode="private" />
        <SectionParticipationContainer>
          <div>
            <h1>Campanhas em Participação</h1>
          </div>

          <section>
            <ContainerListParticipation>
              {donations.map((card) => (
                <CardParticipation
                  key={card.id}
                  post={card.post}
                  callback={setShowModal}
                  setSelectedCard={setSelectedCard}
                />
              ))}
            </ContainerListParticipation>
          </section>
        </SectionParticipationContainer>

      {showModal == "open" && (
        <ModalUser callback={setShowModal} selectedCard={selectedCard} /> //refatorar tirando essas props do modal e usando o useContext!
      )}
    </>
  );
};

export default PageParticipations;
