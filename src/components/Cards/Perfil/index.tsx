import { Badge } from "@material-ui/core";
import { useContext } from "react";
import { BsFillBoxSeamFill } from "react-icons/bs";
import {
  ContainerButtonCounter,
  ButtonToSee,
} from "../../../pages/Dashboard_Company/style";
import { PostContext } from "../../../providers/PostContext";
import { UserContext } from "../../../providers/UserContext/UserContextInitial";
import { ContainerMain } from "./container";
import Div, { InfoUser } from "./style";

const CardPerfil = ({ type }: { type: string }) => {
  const { user } = useContext(UserContext);
  const { fundraising, posts, donations } = useContext(PostContext);

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

          <InfoUser>
            <h3>{user?.name}</h3>
            <small>{user?.email}</small>
          </InfoUser>
        </div>
      </Div>

      <ContainerMain>
        <ContainerButtonCounter>
          <Badge badgeContent={type == "company" ? fundraising.length : donations.length} color="secondary">
            <ButtonToSee
              to={
                type == "company"
                  ? "/company/fundraising"
                  : "/user/participation"
              }
            >
              {type == "company" ? "Arrecadações" : "Participações"}{" "}
              <BsFillBoxSeamFill />
            </ButtonToSee>
          </Badge>
          {type == "company" && (
            <Badge badgeContent={posts.length} color="primary">
              <ButtonToSee to="/company/donation">
                Doações <BsFillBoxSeamFill />
              </ButtonToSee>
            </Badge>
          )}
        </ContainerButtonCounter>
      </ContainerMain>
    </>
  );
};

export default CardPerfil;
