import CardPerfil from "../../components/Cards/Perfil";
import { useContext, useEffect } from "react";
import { isAxiosError } from "axios";
import { api } from "../../services/api";
import { CardPostuser } from "../../components/Cards/PostUser";
import Navbar from "../../components/Header";
import EventUserContainer, { SearchContainerUser } from "./style";
import { PostContext } from "../../providers/PostContext";

const PageUser = () => {
  const { fundraising, setFundraising, setDonations } =
    useContext(PostContext);

  useEffect(() => {
    async function getListPostsService() {
      try {
        const token = localStorage.getItem("@TOKEN");
        const userId = localStorage.getItem("@UserId");

        const response = await api.get(`fundraisings`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const responseDonation = await api.get(
          `users/${userId}?_embed=donation`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setDonations(responseDonation.data.donation);
        setFundraising(response.data);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error.message);
        }

        console.log(error);
      }
    }

    getListPostsService();
  }, []);

  return (
    <>
      <Navbar mode="private" />

      <SearchContainerUser>
        <h1>Principais Campanhas</h1>
        {/* <SearchForm /> */}
      </SearchContainerUser>

      <EventUserContainer>
        <section>
          <ul>
            {fundraising.map((post) => {
              return <CardPostuser key={post.id} post={post} />;
            })}
          </ul>
        </section>

        <aside>
          <CardPerfil type="user" />
        </aside>
      </EventUserContainer>
    </>
  );
};

export default PageUser;
