import { BiTimeFive } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineHomeWork, MdOutlineDescription } from "react-icons/md";

import Div from "./style";
import { iCardPostsCompany } from "./types";
import ButtonMain from "../../../styles/buttonMain";

const CardPostsCompany = ({ post, type, callback, setSelectedPost }: iCardPostsCompany) => {
  return (
    <Div>
      <h2>{post.title}</h2>
      <div className="description">
        <div>
          <BiTimeFive />
          <p>
            {post.date} - {type == "donate" ? post.time : post.final_date}
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

      <ButtonMain onClick={() => {
        setSelectedPost(post)
        callback(type)
      }}>
        Alterar Evento
      </ButtonMain>
    </Div>
  );
};

export default CardPostsCompany;
