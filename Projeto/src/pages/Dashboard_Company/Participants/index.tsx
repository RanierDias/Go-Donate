import { useContext } from "react";
import CardPerfil from "../../../components/Cards/Perfil";
import CardPerfilParticipant from "../../../components/Cards/Perfil/Participant";
import Navbar from "../../../components/Header";
import Search from "../../../components/Search";
import { iFundraising } from "../../../providers/@types";
import { CompanyContext } from "../../../providers/CompanyContext";
import { IUser } from "../../../providers/UserContext/@Types";
import ButtonSmall from "../../../styles/buttonSmall";
import Main from "../Fundraising/style";

interface iSelectedCard {
  selectedCard: iFundraising;
  search: IUser[];
}

const PageParticipants = () => {
  const { selectedCard, search }: iSelectedCard = useContext(CompanyContext);
  const { donations } = useContext(CompanyContext);

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
              ? search.map((user: IUser) => <CardPerfilParticipant user={user} />)
              : donations.map((donation) => <CardPerfilParticipant user={donation.user}/>)}
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

export default PageParticipants