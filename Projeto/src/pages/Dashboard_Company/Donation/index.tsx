import { useContext, useState } from "react";
import Navbar from "../../../components/Header";
import ModalCompany from "../../../components/Modal/Company";
import { CompanyContext } from "../../../providers/CompanyContext";
import {
  DonateInputSearch,
  DonationCart,
  DonationList,
  MainDonationContainer,
} from "./style";

const Donation = () => {
  const { showModal, setShowModal } = useContext(CompanyContext);

  const handleModal = () => {
    showModal == "open" ? setShowModal("false") : setShowModal("open");
  };

  return (
    <>
      {showModal == "open" && <ModalCompany callback={handleModal} />}
      <Navbar mode="public" />
      <MainDonationContainer>
        <DonateInputSearch>
          <h2>Campanhas de doações</h2>
          <div>
            <input type="text" placeholder="Pesquisar participantes" />
            <button
              onClick={() => {
                handleModal()
              }}
            >
              Adicionar evento
            </button>
          </div>
        </DonateInputSearch>

        <DonationList>
          <DonationCart>
            <h3>Natal para todos</h3>
            <span>25/12/2022 - 20:30</span>
            <p>Some description here. Location there, and bla bla bla</p>
            <button onClick={() => handleModal()}>Alterar Evento</button>
          </DonationCart>

          <DonationCart>
            <h3>Natal para todos</h3>
            <span>25/12/2022 - 20:30</span>
            <p>Some description here. Location there, and bla bla bla</p>
            <button>Alterar Evento</button>
          </DonationCart>

          <DonationCart>
            <h3>Natal para todos</h3>
            <span>25/12/2022 - 20:30</span>
            <p>Some description here. Location there, and bla bla bla</p>
            <button>Alterar Evento</button>
          </DonationCart>

          <DonationCart>
            <h3>Natal para todos</h3>
            <span>25/12/2022 - 20:30</span>
            <p>Some description here. Location there, and bla bla bla</p>
            <button>Alterar Evento</button>
          </DonationCart>

          <DonationCart>
            <h3>Natal para todos</h3>
            <span>25/12/2022 - 20:30</span>
            <p>Some description here. Location there, and bla bla bla</p>
            <button>Alterar Evento</button>
          </DonationCart>

          <DonationCart>
            <h3>Natal para todos</h3>
            <span>25/12/2022 - 20:30</span>
            <p>Some description here. Location there, and bla bla bla</p>
            <button>Alterar Evento</button>
          </DonationCart>
        </DonationList>
      </MainDonationContainer>
    </>
  );
};

export default Donation;
