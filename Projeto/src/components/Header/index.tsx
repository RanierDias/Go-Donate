import { FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import { iNavBar } from "./types";

import Header from "./style";
import ButtonSmall from "../../styles/buttonSmall";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContextInitial";
import { PostContext } from "../../providers/PostContext";

const Navbar = ({ mode }: iNavBar) => {
  const { userLogout, navigate } = useContext(UserContext);
  const { setSearch } = useContext(PostContext);
  const currentLocation = window.location.pathname;

  return (
    <Header>
      <img
        src="/src/assets/Logo.svg"
        alt="Logo da go.Donate com letras brancas e um ponto verde"
      />
      {mode === "private" ? (
        <div>
          <ButtonSmall
            onClick={() => {
              navigate(
                currentLocation.includes("company") ? "/company" : "/user"
              );
              setSearch([]);
            }}
          >
            <FaHome />
          </ButtonSmall>
          <ButtonSmall onClick={() => userLogout()}>
            <FiLogOut />
          </ButtonSmall>
        </div>
      ) : (
        <div>
          <ButtonSmall onClick={() => navigate("/login")}>Login</ButtonSmall>
          <ButtonSmall onClick={() => navigate("/register")}>
            Register
          </ButtonSmall>
        </div>
      )}
    </Header>
  );
};

export default Navbar;
