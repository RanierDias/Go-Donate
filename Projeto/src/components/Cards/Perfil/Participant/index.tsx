import { toast } from "react-toastify";
import { IUser } from "../../../../providers/UserContext/@Types";
import ButtonMain from "../../../../styles/buttonMain";
import Div from "../style";

const CardPerfilParticipant = ({ user }: { user: IUser }) => {
  return (
    <Div>
      <div className="perfil">
        <div className="perfil__thumb">
          <img src={user?.background} alt="Thumb estiloso" />
        </div>
        <div className="perfil__photo">
          <img src={user?.image} alt="Perfil estiloso" />
        </div>

        <h3>{user?.name}</h3>
        <p>{user?.email}</p>
      </div>

      <ButtonMain
        onClick={() =>
          toast.warning("Ops, ainda estamos trabalhando nessa feature!")
        }
      >
        Confirmar Participação
      </ButtonMain>
    </Div>
  );
};

export default CardPerfilParticipant;
