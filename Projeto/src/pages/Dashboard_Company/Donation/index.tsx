import { useContext, useEffect, useState } from "react";
import Navbar from "../../../components/Header";
import ModalCompany from "../../../components/Modal/Company";
import { IDonate } from "../../../providers/@types";
import { CompanyContext } from "../../../providers/CompanyContext";
import { api } from "../../../services/api";
import { iPosts } from "../types";
import {
  DonateInputSearch,
  DonationCart,
  DonationList,
  MainDonationContainer,
} from "./style";

const Donation = () => {
  const { showModal, setShowModal } = useContext(CompanyContext);
  const [search, setSearch] = useState('')
  // const [filteredDonations, setFilteredDonations] = useState<>([])
  // const [posts, setPosts] = useState<iPosts[]>([]);
  // const [donations, setDonations] = useState<IDonate[]>([]);
  
  // useEffect(() => {
  //   const loadProducts = async () => {
  //     try {
  //       const res = await api.get("/post");

  //       setPosts(res.data);

  //       console.log(posts);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   loadProducts();
  // }, []);

  //   useEffect(() => {
  //   const token = localStorage.getItem("@userToken");

  //   const getDonations = async () => {
  //     try {
  //       const res = await api.get("/donation", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       setDonations(res.data);
  //       console.log(res.data);
  //       console.log(donations);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getDonations();
  // }, []);

  // useEffect(() => {
  //   setFilteredDonations(donations.filter(item => item.name.toLowerCase().includes(search.toLowerCase())))
  // }, [donations, search])

  const handleModal = () => {
    showModal == "open" ? setShowModal("false") : setShowModal("open");
  };

  return (
    <>
      {showModal == "open" && <ModalCompany callback={handleModal} selectedPost={undefined} />}
      <Navbar mode="private" />
      <MainDonationContainer>
        <DonateInputSearch>
          <h2>Campanhas de doações</h2>
          <div>
            <input type="text" placeholder="Pesquisar participantes" onChange={e => setSearch(e.target.value)}/>
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
