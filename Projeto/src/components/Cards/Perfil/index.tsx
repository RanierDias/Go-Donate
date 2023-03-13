import { Badge } from "@material-ui/core";
import { useContext } from "react";
import {
  ContainerButtonCounter,
  ButtonToSee,
} from "../../../pages/Dashboard_Company/style";
import { CompanyContext } from "../../../providers/CompanyContext";
import { UserContext } from "../../../providers/UserContext/UserContextInitial";
import Div from "./style";

const CardPerfil = ({ type }: { type: string }) => {
  const { user } = useContext(UserContext);
  const { fundraising, posts } = useContext(CompanyContext);

  return (
    <>
      <Div>
        <div className="perfil">
          <div className="perfil__thumb">
            <img src={user?.background} alt="perfil estiloso" />
          </div>
          <div className="perfil__photo">
            <img src={user?.image} alt="perfil diferente" />
          </div>

          <h3>{user?.name}</h3>
          <small>{user?.email}</small>
        </div>
      </Div>

      <ContainerButtonCounter>
        <Badge badgeContent={fundraising.length} color="secondary">
          <ButtonToSee to="/company/fundraising">Arrecadações</ButtonToSee>
        </Badge>
        <Badge badgeContent={posts.length} color="primary">
          <ButtonToSee to="/company/donation">Doacões</ButtonToSee>
        </Badge>
      </ContainerButtonCounter>
    </>
  );
};

export default CardPerfil;
