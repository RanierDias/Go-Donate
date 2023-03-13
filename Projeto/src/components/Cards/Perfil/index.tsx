import { Link } from "react-router-dom";
import Div from "./style";
import { iCardPerfil } from "./types";

const CardPerfil = ({ type, thumb, photo, name, list1, list2 }: iCardPerfil) => {
  return (
    <Div>
      <div className="perfil">
        <div className="perfil__thumb">
          <img src={thumb} alt="perfil estiloso" />
        </div>
        <div className="perfil__photo">
          <img src={photo} alt="perfil diferente" />
        </div>

        <h3>{name}</h3>
      </div>

      <Link to={list1.link} className="event--perfil">
        <p>{type == "user" ? "Participações:" : "Arrecadações:"}</p>
        <span>{list1.number}</span>
        <p>
          {type == "user"
            ? "Veja suas participações"
            : "Monitore os eventos!"}
        </p>
      </Link>
      <Link to={list2.link} className="event--perfil">
        <p>{type == "user" ? "Participações Concluídas:" : "Doações:"}</p>
        <span>{list2.number}</span>
        <p>
          {type == "user"
            ? "Veja suas participações"
            : "Monitore os eventos!"}
        </p>
      </Link>
    </Div>
  );
};

export default CardPerfil;
