import { useForm } from "react-hook-form";
import CardPerfil from "../../components/Cards/Perfil";

import Navbar from "../../components/Header";
import Select from "../../components/Select";
import Main from "./style";


const PageCompany = () => {
  const filterCampaign = (value: string) => {
    switch (value) {
      case "1":
        console.log(value);
        break;
      case "2":
        console.log(value);
        break;
    }
  };

  return (
    <>
      <Navbar mode="private" />
      <Main>
        <h1>Campanhas em andamento</h1>
        <div>
          <section>
            <ul></ul>
          </section>
          <aside>
            <Select name="campaign" callback={filterCampaign}>
              <option value="0">Selecionar campanhas</option>
              <option value="1">Arrecadação</option>
              <option value="2">Doação</option>
            </Select>

            <CardPerfil
              type="company"
              thumb="src/assets/backgroundUser.jpg"
              photo="src/assets/perfil.jpeg"
              name="Roshelle"
              list1={2}
              list2={6}
            />
          </aside>
        </div>
      </Main>
    </>
  );
};

export default PageCompany;
