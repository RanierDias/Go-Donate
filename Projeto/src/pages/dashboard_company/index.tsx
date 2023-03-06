import { useForm } from "react-hook-form";

import Navbar from "../../components/Header";
import Select from "../../components/Select";
import Main from "./style";

const PageCompany = () => {
  const filterCampaign = (value: string) => {
    switch (value) {
      case "1":
        console.log("chamei a api");
        break;
      case "2":
        console.log("chamei a api de novo");
        break;
    }
  };

  return (
    <>
      <Navbar mode="private" />
      <Main>
        <h1>Campanhas em andamento</h1>
        <section>
          <ul></ul>
        </section>
        <aside>
          <Select name="campaign" callback={filterCampaign}>
            <option value="0">Selecionar tipo da campanha</option>
            <option value="1">Arrecadação</option>
            <option value="2">Doação</option>
          </Select>
        </aside>
      </Main>
    </>
  );
};

export default PageCompany;
