import { IoClose } from "react-icons/io5";
import ButtonMain from "../../../styles/buttonMain";

import ModalBackground from "../style";
import ModalParticpation from "./style";
import { iModalUser } from "./type";

const ModalUser = ({ post, callback, selectedCard }: iModalUser) => {
  return (
    <ModalBackground>
      <div>
        <div>
          <h1>Teste</h1>
          <button onClick={() => callback(null)}>
            <IoClose />
          </button>
        </div>

        <ModalParticpation>
          <div>
            <img src={post.image} alt="Imagem Participação" />
            <h2>{post.name}</h2>
            <span>
              {post.city} - {post.state}
            </span>
          </div>
          <h2>{post.title}</h2>
          <div>
            <span>{post.date}</span>
            <span>
              {" "}
              {post.open_time} - {post.close_time}
            </span>
            <span>{post.phone}</span>
          </div>
          <h3>{post.description} </h3>
        </ModalParticpation>
      </div>
    </ModalBackground>
  );
};

export default ModalUser;
