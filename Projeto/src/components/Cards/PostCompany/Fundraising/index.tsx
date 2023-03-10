import { BiTimeFive } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineHomeWork, MdOutlineDescription } from "react-icons/md";

import { iCardFundraising } from "./types";
import Div from "../style";
import ButtonMain from "../../../../styles/buttonMain";

const CardFundraising = ({ post, callback, setSelectedPost }: iCardFundraising) => {
  return (
    <Div>
      <h2>{post.title}</h2>
      <div className="description">
        <div>
          <BiTimeFive />
          <p>{post.date} - {post.final_date}</p>
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
      >
        Participantes
      </ButtonMain>
      <ButtonMain onClick={() => {
        callback("fundraising")
        setSelectedPost(post)
      }}>Alterar Evento</ButtonMain>
    </Div>
  );
};

export default CardFundraising;
