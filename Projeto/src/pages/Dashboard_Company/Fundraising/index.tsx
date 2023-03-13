import { useContext, useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { BsSearch } from "react-icons/bs";

import { api } from "../../../services/api";
import Navbar from "../../../components/Header";
import ButtonSmall from "../../../styles/buttonSmall";
import Main, { ContainerSearchAndButton, ListOfCards, SectionContainer } from "./style";
import CardFundraising from "../../../components/Cards/PostCompany/Fundraising";
import ModalCompany from "../../../components/Modal/Company";
import { CompanyContext } from "../../../providers/CompanyContext";
import { iResponseFundraising } from "../types";
import Search from "../../../components/Search";
import { iFundraising } from "../../../providers/@types";

const PageFundraising = () => {
  const {
    fundraising,
    setFundraising,
    showModal,
    setShowModal,
    setSelectedCard,
    search,
    setSearch,
  } = useContext(CompanyContext);

  const openModalCreateFundraising = () => {
    const formFundrainsigValue = {
      title: "Criar novo evento",
      date: new Date().toJSON(),
      final_date: new Date().toJSON(),
      open_time: "08:00",
      close_time: "17:00",
      phone: "",
      city: "",
      state: "",
      address: "",
      description: "",
    };

    setSelectedCard(formFundrainsigValue);
    setShowModal("newFundraising");
  };

  const searchPost = (search: string) => {
    const postFound = fundraising.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );

    search === "" ? setSearch([]) : setSearch(postFound);
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
        <ContainerSearchAndButton>
          <h1>Campanhas de arrecadações</h1>
          <div>
            <Search callback={({ search }) => searchPost(search)} />

            <ButtonSmall onClick={openModalCreateFundraising}>
              Adcionar evento
            </ButtonSmall>
          </div>
        </ContainerSearchAndButton>

        <SectionContainer>
          <ListOfCards>
            {search.length > 0
              ? search.map((post: iFundraising) => (
                  <CardFundraising key={post.id} post={post} />
                ))
              : fundraising.map((post) => (
                  <CardFundraising key={post.id} post={post} />
                ))}
          </ListOfCards>
        </SectionContainer>
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
