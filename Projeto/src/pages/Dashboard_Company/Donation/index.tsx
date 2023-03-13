import { useContext, useEffect, useState } from "react";
import { VscAdd, VscEdit } from "react-icons/vsc";
import Navbar from "../../../components/Header";
import DonationModal from "../../../components/Modal/Donation";
import { CompanyContext } from "../../../providers/CompanyContext";
import { api } from "../../../services/api";
import {
  DonateInputSearch,
  DonationCart,
  DonationList,
  MainDonationContainer,
} from "./style";

const Donation = () => {
  const { showModal, setShowModal, posts, setPosts, donations, setDonations, setSelectedCard } = useContext(CompanyContext);
  const [search, setSearch] = useState('')
  const regExDate = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}/;
  // const [filteredDonations, setFilteredDonations] = useState<>([])
  
  
  useEffect(() => {
      const loadDonations = async () => {
      const id = localStorage.getItem('@UserId')
      const token = localStorage.getItem('@TOKEN')
      
      try {
        const res = await api.get(`/users/${id}?_embed=post`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setPosts(res.data.post);

        console.log(posts);
      } catch (error) {
        console.log(error);
      }
    };
    loadDonations();
  }, []);

    useEffect(() => {
    const token = localStorage.getItem("@userToken");

    const getDonations = async () => {
      try {
        const res = await api.get("/donation", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // setDonations(res.data);
        console.log(res.data);
        console.log(donations);
      } catch (error) {
        console.log(error);
      }
    };
    getDonations();
  }, []);

  // useEffect(() => {
  //   setFilteredDonations(donations.filter(item => item.name.toLowerCase().includes(search.toLowerCase())))
  // }, [donations, search])

  const handleModal = () => {
    showModal == "open" ? setShowModal("false") : setShowModal("open")
  }

  return (
    <>
      {showModal == "open" && <DonationModal />}
      <Navbar mode="private" />
      <MainDonationContainer>
        <DonateInputSearch>
          <h2>Campanhas de doações</h2>
          <div>
            <input type="text" placeholder="Pesquisar participantes" onChange={e => setSearch(e.target.value)}/>
            <button
              onClick={() => {
                const cardValue = {
                  title: "Criar novo evento",
                  date: new Date().toJSON(),
                  time: "08:00",
                  city: "",
                  state: "",
                  description: "",
                }

                setSelectedCard(cardValue)

                handleModal()
              }}
            >
            <VscAdd />
              Adicionar evento
            </button>
          </div>
        </DonateInputSearch>

        <DonationList>
          {posts.map((donation) => (
            <DonationCart key={donation.id}>
              <h3>{donation.title}</h3>
              <span>{donation.date.replaceAll("-", "/").match(regExDate)} - {donation.time}</span>
              <p>{donation.description}</p>
              <button onClick={() => {

                  setSelectedCard(donation)
                  handleModal()
                }
              }><VscEdit />Alterar Evento</button>
            </DonationCart>
          ))}
        </DonationList>
      </MainDonationContainer>
    </>
  );
};

export default Donation;
