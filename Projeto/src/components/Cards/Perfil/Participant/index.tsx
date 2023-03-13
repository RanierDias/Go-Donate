import { useContext } from "react";
import { IUser } from "../../../../providers/UserContext/@Types";
import ButtonMain from "../../../../styles/buttonMain";
import Div from "../style";

const CardPerfilParticipant = ({ user }: { user: IUser }) => {
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

      <ButtonMain>Confirmar Participação</ButtonMain>
    </Div>
  );
};

export default CardPerfilParticipant;
