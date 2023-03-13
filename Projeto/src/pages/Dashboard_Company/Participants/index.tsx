import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import CardPerfilParticipant from "../../../components/Cards/Perfil/Participant";
import Navbar from "../../../components/Header";
import Search from "../../../components/Search";
import { IDonate, iFundraising } from "../../../providers/@types";
import { CompanyContext } from "../../../providers/CompanyContext";
import { IUser } from "../../../providers/UserContext/@Types";
import { api } from "../../../services/api";
import ButtonSmall from "../../../styles/buttonSmall";
import Main from "../Fundraising/style";
import { iSelectedCard } from "./types";

const PageParticipants = () => {
  const { selectedCard, search }: iSelectedCard = useContext(CompanyContext);
  const { donations, setDonations } = useContext(CompanyContext);

  // useEffect(() => {
  //   async function getListDonations() {
  //     try {
  //       const token = localStorage.getItem("@TOKEN");
  //       const id = localStorage.getItem("@UserId");

  //       const response = await api.get<IDonate>(
  //         `fundraisings/${id}?_embed=donation`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       setDonations(response.data.user);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   getListDonations();
  // }, []);

  return (
    <>
      <Navbar mode="private" />
      <Main>
        <div>
          <h1>{selectedCard.title}</h1>

          <div>
            <Search callback={({ search }) => console.log(search)} />

            <ButtonSmall>Cancelar Evento</ButtonSmall>
          </div>
        </div>

        <section>
          <ul>
            {search.length > 0
              ? search.map((user: IUser) => (
                  <CardPerfilParticipant user={user} />
                ))
              : donations.map((donation) => (
                  <CardPerfilParticipant user={donation.user} />
                ))}
          </ul>
        </section>
      </Main>

      {/* {showModal === "fundraising" ? (
        <ModalCompany />
      ) : showModal === "newFundraising" ? (
        <ModalCompany />
      ) : (
        false
      )} */}
    </>
  );
};

export default PageParticipants;

function isAxiosError(error: unknown) {
  throw new Error("Function not implemented.");
}
