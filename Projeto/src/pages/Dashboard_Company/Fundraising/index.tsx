import { BsSearch } from "react-icons/bs";
import Navbar from "../../../components/Header";
import ButtonSmall from "../../../styles/buttonSmall";
import Main from "./style";

const PageFundraising = () => {
  return (
    <>
      <Navbar mode="private" />
      <Main>
        <div>
          <h1>Campanhas de arrecadações</h1>

          <div>
            <div>
              <input type="text" placeholder="Pesquisar participante" />
              <BsSearch />
            </div>
            <ButtonSmall>Adcionar evento</ButtonSmall>
          </div>
        </div>
      </Main>
    </>
  );
};

export default PageFundraising;
