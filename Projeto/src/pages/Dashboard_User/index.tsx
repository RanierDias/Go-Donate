import CardPerfil from "../../components/Cards/Perfil";
import { useContext, useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { api } from "../../services/api";
import { CardPostuser } from "../../components/Cards/PostUser";
import SearchForm from "../../components/Search";
import Navbar from "../../components/Header";
import EventUserContainer, { SearchContainerUser } from "./style";
import { iPosts } from "../Dashboard_Company/types";
import { CompanyContext } from "../../providers/CompanyContext";

const PageUser = () => {
  const { posts, setPosts } = useContext(CompanyContext);

  useEffect(() => {
    async function getListPostsService() {
      try {
        const response = await api.get<iPosts[]>("/fundraising");
        setPosts(response.data);
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
            {posts.map((post) => {
              return <CardPostuser key={post.id} post={post} />;
            })}
          </ul>
        </section>

        <aside>
          <CardPerfil
            type="user"
            thumb="src/assets/backgroundUser.jpg"
            photo="src/assets/perfil.jpeg"
            name="Roshelle"
            list1={{ number: 1, link: "/" }}
            list2={{ number: 1, link: "/" }}
          />
        </aside>
      </EventUserContainer>
    </>
  );
};

export default PageUser;
