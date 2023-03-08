import { FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import { iNavBar } from "./types";

import Header from "./style";
import { Link } from "react-router-dom";

const Navbar = ({ mode }: iNavBar) => {
  return (
    <Header>
      <img
        src="/src/assets/Logo.svg"
        alt="Logo da go.Donate com letras brancas e um ponto verde"
      />
      {mode === "private" ? (
        <div>
          <Link to="home">
            <FaHome />
          </Link>
          <Link to="/">
            <FiLogOut />
          </Link>
        </div>
      ) : (
        <div>
          <Link to="http://localhost:5173/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </Header>
  );
};

export default Navbar