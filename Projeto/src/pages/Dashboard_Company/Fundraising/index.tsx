import { useContext, useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { BsSearch } from "react-icons/bs";

import { api } from "../../../services/api";
import { iFundraising } from "../types";
import Navbar from "../../../components/Header";
import ButtonSmall from "../../../styles/buttonSmall";
import Main from "./style";
import CardFundraising from "../../../components/Cards/PostCompany/Fundraising";
import ModalCompany from "../../../components/Modal/Company";
import { CompanyContext } from "../../../providers/CompanyContext";

const PageFundraising = () => {
  const {
    fundraising,
    setFundraising,
    showModal,
    setShowModal,
    selectedCard,
    setSelectedCard,
  } = useContext(CompanyContext);

  useEffect(() => {
    async function getListPosts() {
      try {
        const token = localStorage.getItem("@TOKEN");

        const response = await api.get<iFundraising[]>("/fundraising", {
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

    getListPosts();
  }, []);

  return (
    <>
      <Navbar mode="private" />
      <Main>
        <div>
          <h1>Campanhas de arrecadações</h1>

          <div>
            <div>
              <input type="text" placeholder="Pesquisar participante" />
              <BsSearch />
            </div>
            <ButtonSmall>Adcionar evento</ButtonSmall>
          </div>
        </div>

        <section>
          <ul>
            {fundraising.map((post) => (
              <CardFundraising
                key={post.id}
                post={post}
                callback={setShowModal}
                setSelectedPost={setSelectedCard}
              />
            ))}
          </ul>
        </section>
      </Main>

      {showModal && (
        <ModalCompany callback={setShowModal} selectedPost={selectedCard} />
      )}
    </>
  );
};

export default PageFundraising;
