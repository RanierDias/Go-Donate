import { isAxiosError } from "axios";
import { useContext, useEffect } from "react";
import CardPerfil from "../../components/Cards/Perfil";
import CardPostsCompany from "../../components/Cards/PostCompany";
import Navbar from "../../components/Header";
import ModalCompany from "../../components/Modal/Company";
import Select from "../../components/Select";
import { api } from "../../services/api";
import Main, { ButtonToSee, ContainerButtonCounter } from "./style";
import { CompanyContext } from "../../providers/CompanyContext";
import { UserContext } from "../../providers/UserContext/UserContextInitial";
import { iResponseFundraising, iResponsePost } from "./types";
import CardPerfilMobile from "../../components/Cards/Perfil/Mobile";
import { Badge } from "@material-ui/core";
import DonationModal from "../../components/Modal/Donation";

const PageCompany = () => {
  const {
    fundraising,
    setFundraising,
    posts,
    setPosts,
    showModal,
    filter,
    setFilter,
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
        const id = localStorage.getItem("@UserId");

        const response = await api.get<iResponseFundraising>(
          `users/${id}?_embed=fundraisings`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const responsePost = await api.get<iResponsePost>(
          `users/${id}?_embed=post`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setFundraising(response.data.fundraisings);
        setPosts(responsePost.data.post);
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

      <CardPerfilMobile />

      <Main>
        <h1>Campanhas em andamento</h1>
        <div>
          <section>
            {filter == "donate" || filter == true ? (
              <>
                <h2>Doações</h2>
                <ul>
                  {posts.length > 0 ? (
                    posts.map((post) => (
                      <CardPostsCompany
                        key={post.id}
                        post={post}
                        type={"donate"}
                      />
                    ))
                  ) : (
                    <p>Sem posts de doação</p>
                  )}
                </ul>
              </>
            ) : (
              false
            )}

            {filter == "fundraising" || filter == true ? (
              <>
                <h2>Arrecadações</h2>
                <ul>
                  {fundraising.length > 0 ? (
                    fundraising.map((post) => (
                      <CardPostsCompany
                        key={post.id}
                        post={post}
                        type={"fundraising"}
                      />
                    ))
                  ) : (
                    <p>Sem posts de arrecadação</p>
                  )}
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
              <>
                <CardPerfil type="company" />
              </>
            )}
          </aside>
        </div>
      </Main>

      {showModal == "fundraising" ? (
        <ModalCompany />
      ) : showModal == "donate" ? (
        <DonationModal />
      ) : (
        false
      )}
    </>
  );
};

export default PageCompany;
