import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import CardPerfil from "../../components/Cards/Perfil";
import CardPostsCompany from "../../components/Cards/PostCompany";

import Navbar from "../../components/Header";
import ModalCompany from "../../components/Modal/Company";
import Select from "../../components/Select";
import { api, dev } from "../../services/api";
import Main from "./style";
import { iFundraising, iPosts } from "./types";
import { iPostCompany } from "../../components/Cards/PostCompany/types";

const PageCompany = () => {
  const [fundraisings, setFundraisings] = useState([] as iFundraising[]);
  const [donations, setDonations] = useState([] as iPosts[]);
  const [filter, setFilter] = useState<boolean | string>(true);
  const [showModal, setShowModal] = useState<null | string>(null);
  const [selectedPost, setSelectedPost] = useState({} as iPostCompany);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbmllckBtYWlsLmNvbSIsImlhdCI6MTY3ODQxMDM5OSwiZXhwIjoxNjc4NDEzOTk5LCJzdWIiOiIyIn0.Jnhs6SZPPZekqe54Luj9Jn33pCfUe8VX-FJz0fchKec";

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

        setFundraisings(response.data);
        setDonations(responsePost.data);
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
                  {donations.map((post) => (
                    <CardPostsCompany
                      key={post.id}
                      post={post}
                      type={"donate"}
                      callback={setShowModal}
                      setSelectedPost={setSelectedPost}
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
                  {fundraisings.map((post) => (
                    <CardPostsCompany
                      key={post.id}
                      post={post}
                      type={"fundraising"}
                      callback={setShowModal}
                      setSelectedPost={setSelectedPost}
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
                number: fundraisings.length,
                link: "/company/fundraising",
              }}
              list2={{ number: donations.length, link: "/company/donation" }}
            />
          </aside>
        </div>
      </Main>

      {showModal == "fundraising" ? (
        <ModalCompany callback={setShowModal} selectedPost={selectedPost} />
      ) : showModal == "donate" ? (
        <h1>Eu sou um modal</h1>
      ) : (
        false
      )}
    </>
  );
};

export default PageCompany;
