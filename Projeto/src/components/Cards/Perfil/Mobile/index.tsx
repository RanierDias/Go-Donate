import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../providers/UserContext/UserContextInitial";
import Div from "./style";

const CardPerfilMobile = () => {
  const { user } = useContext(UserContext);

  return (
    <Div>
      <div>
        <div>
          <img src={user?.image} />
        </div>
        
        <p>{user?.name}</p>
      </div>

      <div>
        <Link to={"/company/fundraising"}>Arrecadações</Link>
        <Link to={"/company/donation"}>Doações</Link>
      </div>
    </Div>
  );
};

export default CardPerfilMobile;
