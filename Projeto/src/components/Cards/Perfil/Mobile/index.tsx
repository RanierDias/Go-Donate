import { Badge } from "@material-ui/core";
import { useContext } from "react";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  ContainerButtonCounter,
  ButtonToSee,
} from "../../../../pages/Dashboard_Company/style";
import { PostContext } from "../../../../providers/PostContext";
import { UserContext } from "../../../../providers/UserContext/UserContextInitial";
import {ContainerMobile} from "../container";
import Div, { ContainerMobileCard } from "./style";

const CardPerfilMobile = ({ type }: { type: string }) => {
  const { user } = useContext(UserContext);
  const { fundraising, posts, donations } = useContext(PostContext);

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
          <Badge
            badgeContent={
              type == "company" ? fundraising.length : donations.length
            }
            color="secondary"
          >
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
      </ContainerMobile>
    </ContainerMobileCard>
  );
};

export default CardPerfilMobile;
