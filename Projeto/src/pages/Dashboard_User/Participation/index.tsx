import { isAxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import CardParticipation from "../../../components/Cards/PostUser/Participation";
import { api } from "../../../services/api";
import Navbar from "../../../components/Header";
import { PostContext } from "../../../providers/PostContext";
import { UserContext } from "../../../providers/UserContext/UserContextInitial";
import ModalUser from "../../../components/Modal/Participation";
import { ModalContext } from "../../../providers/ModalContext";
import { ContainerListParticipation, SectionParticipationContainer } from "./style";

const PageParticipations = () => {
  const { donations, setDonations } = useContext(PostContext);
  const { showModal } = useContext(ModalContext);

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
                />
              ))}
            </ContainerListParticipation>
          </section>
        </SectionParticipationContainer>

      {showModal == "open" && <ModalUser />}
    </>
  );
};

export default PageParticipations;
