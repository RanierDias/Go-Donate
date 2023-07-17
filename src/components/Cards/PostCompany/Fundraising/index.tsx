import { BiCalendar } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineHomeWork, MdOutlineDescription } from "react-icons/md";

import { iCardFundraising } from "./types";
import Div from "../style";
import ButtonMain from "../../../../styles/buttonMain";
import { useContext } from "react";
import { VscEdit } from "react-icons/vsc";
import { UserContext } from "../../../../providers/UserContext/UserContextInitial";
import { ModalContext } from "../../../../providers/ModalContext";

const CardFundraising = ({ post }: iCardFundraising) => {
  const regExDate = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}/;
  const date = post.date.replaceAll("-", "/").match(regExDate);
  const dateFinal = post.final_date?.replaceAll("-", "/").match(regExDate);

  const { setSelectedCard, setShowModal } = useContext(ModalContext);
  const { navigate } = useContext(UserContext);

  return (
    <Div>
      <h2>{post.title}</h2>
      <div className="description">
        <div>
          <BiCalendar />
          <p>
            {date} - {dateFinal}
          </p>
        </div>
        <div>
          <IoLocationOutline />
          <p>
            {post.city} - {post.state}
          </p>
        </div>
        <div>
          <BsTelephone />
          <p>{post.phone}</p>
        </div>
        <div>
          <MdOutlineHomeWork />
          <p>{post.address}</p>
        </div>
        <div>
          <MdOutlineDescription />
          <p>{post.description}</p>
        </div>
      </div>

      <ButtonMain
        color="gray-60"
        background="white"
        hover={{ color: "white", background: "gray-60" }}
        onClick={() => {
          setSelectedCard(post);
          navigate("participants");
        }}
      >
        Participantes
      </ButtonMain>
      <ButtonMain
        onClick={() => {
          setShowModal("fundraising");
          setSelectedCard(post);
        }}
      >
        <VscEdit />
        Alterar Evento
      </ButtonMain>
    </Div>
  );
};

export default CardFundraising;
