import { AxiosBasicCredentials, isAxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import CardPerfil from "../../components/Cards/Perfil";
import CardPostsCompany from "../../components/Cards/PostCompany";

import Navbar from "../../components/Header";
import ModalCompany from "../../components/Modal/Company";
import Select from "../../components/Select";
import { api } from "../../services/api";
import Main from "./style";
import { iFundraising, iPosts } from "./types";
import { CompanyContext } from "../../providers/CompanyContext";
import { UserContext } from "../../providers/UserContext/UserContextInitial";

const PageCompany = () => {
  const {
    fundraising,
    setFundraising,
    posts,
    setPosts,
    showModal,
    setShowModal,
    filter,
    setFilter,
    selectedCard,
    setSelectedCard,
  } = useContext(CompanyContext);

  const { user } = useContext(UserContext);

  const filterCampaign = async (value: string) => {
    switch (value) {
      case "0":
        setFilter(true);
        break;
      case "1":
        setFilter("fundraising");
        break;
      case "2":
        setFilter("donate");
        break;
    }
  };

  useEffect(() => {
    async function getListPosts() {
      try {
        const token = localStorage.getItem("@TOKEN");

        const response = await api.get<iFundraising[]>("/fundraising", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const responsePost = await api.get<iPosts[]>("/post");

        setFundraising(response.data);
        setPosts(responsePost.data);
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
        <h1>Campanhas em andamento</h1>
        <div>
          <section>
            {filter == "donate" || filter == true ? (
              <>
                <h2>Doações</h2>
                <ul>
                  {posts.map((post) => (
                    <CardPostsCompany
                      key={post.id}
                      post={post}
                      type={"donate"}
                      callback={setShowModal}
                      setSelectedPost={setSelectedCard}
                    />
                  ))}
                </ul>
              </>
            ) : (
              false
            )}

            {filter == "fundraising" || filter == true ? (
              <>
                <h2>Arrecadações</h2>
                <ul>
                  {fundraising.map((post) => (
                    <CardPostsCompany
                      key={post.id}
                      post={post}
                      type={"fundraising"}
                      callback={setShowModal}
                      setSelectedPost={setSelectedCard}
                    />
                  ))}
                </ul>
              </>
            ) : (
              false
            )}
          </section>
          <aside>
            <Select name="campaign" callback={filterCampaign}>
              <option value="0">Selecionar campanhas</option>
              <option value="1">Arrecadação</option>
              <option value="2">Doação</option>
            </Select>

            {user && (
              <CardPerfil
                type="company"
                thumb={user?.background}
                photo={user?.image}
                name={user?.name}
                list1={{
                  number: fundraising.length,
                  link: "/company/fundraising",
                }}
                list2={{ number: posts.length, link: "/company/donation" }}
              />
            )}
          </aside>
        </div>
      </Main>

      {showModal == "fundraising" ? (
        <ModalCompany callback={setShowModal} selectedPost={selectedCard} />
      ) : showModal == "donate" ? (
        <h1>Eu sou um modal</h1>
      ) : (
        false
      )}
    </>
  );
};

export default PageCompany;
