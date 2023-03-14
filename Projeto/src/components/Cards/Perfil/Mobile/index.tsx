import { Badge } from "@material-ui/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  ContainerButtonCounter,
  ButtonToSee,
} from "../../../../pages/Dashboard_Company/style";
import { PostContext } from "../../../../providers/PostContext";
import { UserContext } from "../../../../providers/UserContext/UserContextInitial";
import {ContainerMobile} from "../container";
import Div, { ContainerMobileCard } from "./style";

const CardPerfilMobile = () => {
  const { user } = useContext(UserContext);
  const { fundraising, posts } = useContext(PostContext);

  return (
    <ContainerMobileCard>
      <Div>
        <div>
          <img src={user?.image} />
        </div>

        <div>
          <h3>{user?.name}</h3>
          <small>{user?.email}</small>
        </div>
      </Div>

      <ContainerMobile>
        <ContainerButtonCounter>
          <Badge badgeContent={fundraising.length} color="secondary">
            <ButtonToSee to="/company/fundraising">Arrecadações</ButtonToSee>
          </Badge>
          <Badge badgeContent={posts.length} color="primary">
            <ButtonToSee to="/company/donation">Doacões</ButtonToSee>
          </Badge>
        </ContainerButtonCounter>
      </ContainerMobile>
    </ContainerMobileCard>
  );
};

export default CardPerfilMobile;
