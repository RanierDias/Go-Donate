import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContextInitial";
import Div from "./style";

const CardPerfil = ({ type }: { type: string }) => {
  const { user } = useContext(UserContext);

  return (
    <Div>
      <div className="perfil">
        <div className="perfil__thumb">
          <img src={user?.background} alt="perfil estiloso" />
        </div>
        <div className="perfil__photo">
          <img src={user?.image} alt="perfil diferente" />
        </div>

        <h3>{user?.name}</h3>
        <p>{user?.email}</p>
      </div>
    </Div>
  );
};

export default CardPerfil;
