import { BiTimeFive } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineHomeWork, MdOutlineDescription } from "react-icons/md";

import Div from "./style";
import { iCardPostsCompany } from "./types";
import ButtonMain from "../../../styles/buttonMain";
import { useContext } from "react";
import { VscEdit } from "react-icons/vsc";
import { ModalContext } from "../../../providers/ModalContext";

const CardPostsCompany = ({ post, type }: iCardPostsCompany) => {
  const regExDate = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}/;
  const date = post.date.replaceAll("-", "/").match(regExDate);
  const dateFinal = post.final_date?.replaceAll("-", "/").match(regExDate);

  const { setSelectedCard, setShowModal } = useContext(ModalContext);

  return (
    <Div>
      <h2>{post.title}</h2>
      <div className="description">
        <div>
          <BiTimeFive />
          <p>
            {date} - {type == "donate" ? post.time : dateFinal}
          </p>
        </div>
        <div>
          <IoLocationOutline />
          <p>
            {post.city} - {post.state}
          </p>
        </div>
        {type == "fundraising" && (
          <div>
            <BsTelephone />
            <p>{post.phone}</p>
          </div>
        )}
        {type == "fundraising" && (
          <div>
            <MdOutlineHomeWork />
            <p>{post.address}</p>
          </div>
        )}
        <div>
          <MdOutlineDescription />
          <p>{post.description}</p>
        </div>
      </div>

      <p>{type == "fundraising" ? "Arrecadação" : "Doação"}</p>

      <ButtonMain
        onClick={() => {
          setSelectedCard(post);
          setShowModal(type);
        }}
      >
        <VscEdit />
        Alterar Evento
      </ButtonMain>
    </Div>
  );
};

export default CardPostsCompany;
