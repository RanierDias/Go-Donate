import { useContext } from "react";
import { ModalContext } from "../../../../providers/ModalContext";
import ButtonMain from "../../../../styles/buttonMain";
import StyleCardParticipation, {
  InfoUser,
  SectionUserParticipation,
} from "./style";
import { iCardParticipation } from "./type";
import { AiFillCalendar, AiOutlineFieldTime } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";

const CardParticipation = ({ card }: iCardParticipation) => {
  const regExDate = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}/;
  const date = card.post.date.replaceAll("-", "/").match(regExDate);
  const dateFinal = card.post.final_date?.replaceAll("-", "/").match(regExDate);

  const { setShowModal, setSelectedCard } = useContext(ModalContext);

  return (
    <>
      <StyleCardParticipation>
        <SectionUserParticipation>
          <InfoUser>
            <img src={card.post.image} alt="Imagem Participação" />
            <div>
              <h2>{card.post.title}</h2>
              <span>{card.post.phone}</span>
            </div>
          </InfoUser>
          <p>
            <AiFillCalendar /> {date} - {dateFinal}
          </p>
          <span>
            <AiOutlineFieldTime /> {card.post.open_time} -{" "}
            {card.post.close_time}
          </span>
          <span>
            <FaRegAddressCard /> {card.post.address}
          </span>
          <ButtonMain
            onClick={() => {
              setShowModal("open");
              setSelectedCard(card);
            }}
          >
            Mostrar Detalhes
          </ButtonMain>
        </SectionUserParticipation>
      </StyleCardParticipation>
    </>
  );
};

export default CardParticipation;
