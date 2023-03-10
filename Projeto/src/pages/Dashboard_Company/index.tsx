import { isAxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import CardPerfil from "../../components/Cards/Perfil";
import CardPostsCompany from "../../components/Cards/PostCompany";

import Navbar from "../../components/Header";
import ModalCompany from "../../components/Modal/Company";
import Select from "../../components/Select";
import { api, dev } from "../../services/api";
import Main from "./style";
import { iFundraising, iPosts } from "./types";
import { CompanyContext } from "../../providers/CompanyContext";

export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbmllckBtYWlsLmNvbSIsImlhdCI6MTY3ODQ1MTIzOSwiZXhwIjoxNjc4NDU0ODM5LCJzdWIiOiIyIn0.F3PNsYUG4royCPxfhnbfE5Ftq5qZRq365tRr96048LA";

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
    setSelectedCard
  } = useContext(CompanyContext);

  const filterCampaign = async (value: string) => {
    switch (value) {
      case "0":
        setFilter(true);
        break;
      case "1":
        setFilter("fundraising");
        console.log(filter);
        break;
      case "2":
        setFilter("donate");
        break;
    }
  };

  useEffect(() => {
    async function getListPosts() {
      try {
        const response = await dev.get<iFundraising[]>("/fundraising", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const responsePost = await dev.get<iPosts[]>("/post", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

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

            <CardPerfil
              type="company"
              thumb="src/assets/backgroundUser.jpg"
              photo="src/assets/perfil.jpeg"
              name="Roshelle"
              list1={{
                number: fundraising.length,
                link: "/company/fundraising",
              }}
              list2={{ number: posts.length, link: "/company/donation" }}
            />
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
