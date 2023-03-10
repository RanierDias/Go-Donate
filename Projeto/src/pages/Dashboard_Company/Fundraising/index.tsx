import { useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { BsSearch } from "react-icons/bs";

import { api } from "../../../services/api";
import { iFundraising } from "../types";
import Navbar from "../../../components/Header";
import ButtonSmall from "../../../styles/buttonSmall";
import Main from "./style";
import CardFundraising from "../../../components/Cards/PostCompany/Fundraising";
import ModalCompany from "../../../components/Modal/Company";

const PageFundraising = () => {
  const [posts, setPosts] = useState([] as iFundraising[]);
  const [showModal, setShowModal] = useState<null | string>(null);
  const [selectedPost, setSelectedPost] = useState({} as iFundraising);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbmllckBtYWlsLmNvbSIsImlhdCI6MTY3ODQxMDM5OSwiZXhwIjoxNjc4NDEzOTk5LCJzdWIiOiIyIn0.Jnhs6SZPPZekqe54Luj9Jn33pCfUe8VX-FJz0fchKec";

  useEffect(() => {
    async function getListPosts() {
      try {
        const response = await api.get<iFundraising[]>("/fundraising", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data);
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
        <div>
          <h1>Campanhas de arrecadações</h1>

          <div>
            <div>
              <input type="text" placeholder="Pesquisar participante" />
              <BsSearch />
            </div>
            <ButtonSmall>Adcionar evento</ButtonSmall>
          </div>
        </div>

        <section>
          <ul>
            {posts.map((post) => (
              <CardFundraising
                key={post.id}
                post={post}
                callback={setShowModal}
                setSelectedPost={setSelectedPost}
              />
            ))}
          </ul>
        </section>
      </Main>

      {showModal && (
        <ModalCompany callback={setShowModal} selectedPost={selectedPost} />
      )}
    </>
  );
};

export default PageFundraising;
