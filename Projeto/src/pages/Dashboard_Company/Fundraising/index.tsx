import { useContext, useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { BsSearch } from "react-icons/bs";

import { api } from "../../../services/api";
import Navbar from "../../../components/Header";
import ButtonSmall from "../../../styles/buttonSmall";
import Main from "./style";
import CardFundraising from "../../../components/Cards/PostCompany/Fundraising";
import ModalCompany from "../../../components/Modal/Company";
import { CompanyContext } from "../../../providers/CompanyContext";
import { iResponseFundraising } from "../types";
import Search from "../../../components/Search";

const PageFundraising = () => {
  const {
    fundraising,
    setFundraising,
    showModal,
    setShowModal,
    setSelectedCard,
  } = useContext(CompanyContext);

  const openModalCreateFundraising = () => {
    const formFundrainsigValue = {
      title: "Criar novo evento",
      date: new Date().toJSON(),
      final_date: new Date().toJSON(),
      phone: "",
      city: "",
      state: "",
      address: "",
      description: "",
    };

    setSelectedCard(formFundrainsigValue);
    setShowModal("newFundraising");
  };

  useEffect(() => {
    async function getListPosts() {
      try {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@UserId");

        const response = await api.get<iResponseFundraising>(
          `users/${id}?_embed=fundraisings`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setFundraising(response.data.fundraisings);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error.message);
        } else {
          console.log(error);
        }
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
            <Search callback={({ search }) => console.log(search)} />

            <ButtonSmall onClick={openModalCreateFundraising}>
              Adcionar evento
            </ButtonSmall>
          </div>
        </div>

        <section>
          <ul>
            {fundraising.map((post) => (
              <CardFundraising key={post.id} post={post} />
            ))}
          </ul>
        </section>
      </Main>

      {showModal === "fundraising" ? (
        <ModalCompany />
      ) : showModal === "newFundraising" ? (
        <ModalCompany />
      ) : (
        false
      )}
    </>
  );
};

export default PageFundraising;
