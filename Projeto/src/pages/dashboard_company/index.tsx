import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import CardPerfil from "../../components/Cards/Perfil";
import CardPostsCompany from "../../components/Cards/PostCompany";

import Navbar from "../../components/Header";
import Select from "../../components/Select";
import { api } from "../../services/api";
import Main from "./style";
import { iPosts } from "./types";

const PageCompany = () => {
  const [posts, setPosts] = useState([] as iPosts[]);

  const filterCampaign = (value: string) => {
    switch (value) {
      case "1":
        console.log(value);
        break;
      case "2":
        console.log(value);
        break;
    }
  };

  useEffect(() => {
    async function getListPosts() {
      try {
        const response = await api.get<iPosts[]>("/post");
        setPosts(response.data);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error.message);
        }

        console.log(error);
      }
    }

    getListPosts()
  }, []);

  return (
    <>
      <Navbar mode="private" />
      <Main>
        <h1>Campanhas em andamento</h1>
        <div>
          <section>
            <ul>{posts.map(post => <CardPostsCompany key={post.id} post={post} />)}</ul>
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
              list1={2}
              list2={6}
            />
          </aside>
        </div>
      </Main>
    </>
  );
};

export default PageCompany;
