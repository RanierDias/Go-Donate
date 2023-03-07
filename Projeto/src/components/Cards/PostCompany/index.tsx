import { BiTimeFive } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineHomeWork, MdOutlineDescription } from "react-icons/md";

import Div from "./style";
import { iCardPostsCompany } from "./types";

const CardPostsCompany = ({ post }: iCardPostsCompany) => {
  return (
    <Div>
      <h2>{post.name}</h2>
      <div className="description">
        <div>
          <BiTimeFive />
          <p>{post.date}</p>
        </div>
        <div>
          <IoLocationOutline />
          <p>
            {post.city} - {post.state}
          </p>
        </div>
        <div>
          <BsTelephone />
          <p>(72) 98786-7879</p>
        </div>
        <div>
          <MdOutlineHomeWork />
          <p>Rua magalhães dourado melo</p>
        </div>
        <div>
          {/* <div>
            <MdOutlineDescription />
          </div> */}
          <MdOutlineDescription />
          <p>{post.description}</p>
        </div>
      </div>

      <p>Arrecadação</p>

      <button>Alterar Evento</button>
    </Div>
  );
};

export default CardPostsCompany;
