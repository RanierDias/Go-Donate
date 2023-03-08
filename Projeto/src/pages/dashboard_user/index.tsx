import CardPerfil from "../../components/Cards/Perfil";
import Navbar from "../../components/Header";
import SearchForm from "../../components/Search";
import { iPostsService } from "./types";
import { useEffect, useState } from "react";
import { CardPostuser } from "../../components/Cards/PostUser";
import { api } from "../../services/api";
import { isAxiosError } from "axios";

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
            type="company"
            thumb="src/assets/backgroundUser.jpg"
            photo="src/assets/perfil.jpeg"
            name="Roshelle"
            list1={2}
            list2={6}
          />
        </aside>
      </main>
    </>
  );
};

export default PageUser;
