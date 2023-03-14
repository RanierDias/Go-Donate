import ButtonMain from "../../../../styles/buttonMain";
import StyleCardParticipation, { InfoUser, SectionUserParticipation } from "./style";
import { iCardParticipation } from "./type";
import { AiFillCalendar, AiOutlineFieldTime } from 'react-icons/ai'
import { FaRegAddressCard } from "react-icons/fa";

const CardParticipation = ({
  post,
  callback,
  setSelectedCard,
}: iCardParticipation) => {
  const regExDate = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}/;
  const date = post.date.replaceAll("-", "/").match(regExDate);
  const dateFinal = post.final_date?.replaceAll("-", "/").match(regExDate);

  return (
    <>
      <StyleCardParticipation>
        <SectionUserParticipation>
          <InfoUser>
            <img src={post.image} alt="Imagem Participação" />
            <div>
              <h2>{post.title}</h2>
              <span>{post.phone}</span>
            </div>
          </InfoUser>
            <p><AiFillCalendar /> {date} - {dateFinal}</p>
            <span><AiOutlineFieldTime /> {post.open_time} - {post.close_time}</span>
            <span><FaRegAddressCard /> {post.address}</span>
          <ButtonMain
            onClick={() => {
              callback("participation");
              setSelectedCard(post);
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
