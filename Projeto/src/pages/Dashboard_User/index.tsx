import CardPerfil from "../../components/Cards/Perfil";
import { iPostsService } from "./types";
import { useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { api } from "../../services/api";
import { CardPostuser } from "../../components/Cards/PostUser";
import SearchForm from "../../components/Search";
import Navbar from "../../components/Header";

const PageUser = () => {
  const [postsServices, setPostsServices] = useState([] as iPostsService[]);

  useEffect(() => {
    async function getListPostsService() {
      try {
        const response = await api.get<iPostsService[]>("/post");
        setPostsServices(response.data);
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

      <h1>Principais Campanhas</h1>

      <main>
        <section>
          <ul>
            {postsServices.map((post) => (
              <CardPostuser key={post.id} post={post} />
            ))}
          </ul>
        </section>

        <aside>
          <div>
            <SearchForm />
          </div>

          <CardPerfil
            type="user"
            thumb="src/assets/backgroundUser.jpg"
            photo="src/assets/perfil.jpeg"
            name="Roshelle"
            list1={{ number: 1, link: "/" }}
            list2={{ number: 1, link: "/" }}
          />
        </aside>
      </main>
    </>
  );
};

export default PageUser;