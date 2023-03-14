import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import CardPerfilParticipant from "../../../components/Cards/Perfil/Participant";
import Navbar from "../../../components/Header";
import NothingHere from "../../../components/NothingHere";
import Search from "../../../components/Search";
import { iFundraising } from "../../../providers/@types";
import { ModalContext } from "../../../providers/ModalContext";
import { PostContext } from "../../../providers/PostContext";
import { UserContext } from "../../../providers/UserContext/UserContextInitial";
import { api } from "../../../services/api";
import ButtonSmall from "../../../styles/buttonSmall";
import Main from "../Fundraising/style";
import { iSelectedCard } from "./types";

const PageParticipants = () => {
  const { search }: iSelectedCard = useContext(PostContext);
  const { donations, setDonations, fundraising, setFundraising, setSearch } =
    useContext(PostContext);
  const { selectedCard, setShowModal } = useContext(ModalContext);
  const { navigate } = useContext(UserContext);

  const deletePost = async () => {
    try {
      const token = localStorage.getItem("@TOKEN");

      api.delete<{}>(`fundraisings/${selectedCard.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newFundraising = fundraising.filter(
        (post) => post.id != selectedCard.id
      );
      const newSearch = search.filter((post) => post.id != selectedCard.id);

      setSearch(newSearch);
      setFundraising(newFundraising);
      navigate('/company/fundraising');
      toast.success("Evento deletado!");
    } catch (error) {
      toast.error("Ops, algo deu errado");
    }
  };

  useEffect(() => {
    async function getListDonations() {
      try {
        const token = localStorage.getItem("@TOKEN");

        const response = await api.get(`fundraisings/${selectedCard.id}?_embed=donation`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setDonations(response.data.donation);
      } catch (error) {
        console.log(error);
      }
    }

    getListDonations();
  }, []);

  return (
    <>
      <Navbar mode="private" />
      <Main>
        <div>
          <h1>{selectedCard.title}</h1>

          <div>
            <Search callback={({ search }) => console.log(search)} />

            <ButtonSmall onClick={deletePost}>Cancelar Evento</ButtonSmall>
          </div>
        </div>

        <section>
          <ul>
            {donations.length > 0 ? (
              donations.map((donation) => (
                <CardPerfilParticipant key={donation.id} user={donation.user} />
              ))
            ) : (
              <NothingHere />
            )}
          </ul>
        </section>
      </Main>
    </>
  );
};

export default PageParticipants;

function isAxiosError(error: unknown) {
  throw new Error("Function not implemented.");
}
