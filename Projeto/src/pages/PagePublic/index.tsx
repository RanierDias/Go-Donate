import Navbar from "../../components/Header";
import { CardPublic, DateContainer, DonateSection, InfoEvent, ListCardContainer, MainContainer, SectionContainer, UserContainer } from "./style";

const PagePublic = () => {

  return (
    <>
      <Navbar mode="public"/>
      <MainContainer>
        <SectionContainer>
          <div>
            <h3>Principais Campanhas</h3>
            <DateContainer>
              <span>Hoje</span>
              <span>Dia 06</span>
              <span>Segunda-feira</span>
            </DateContainer>
          </div>
          <input type="text" placeholder="Selecione Estado" />
        </SectionContainer>
        <DonateSection>
          <h4>Pontos de doações</h4>
          <ListCardContainer>
            <CardPublic>
              <UserContainer>
                <figure>
                  <img src="https://portalcorreio.com.br/portalcorreio/arquivos/2023/01/fea5fa4cc1fc517cedb0eb0a25aae6fb.png" />
                </figure>
                <div>
                  <h3>Mais Feliz Company</h3>
                  <span>Sao Luis - Maranhao</span>
                </div>
              </UserContainer>
                <p>Evento ocorrendo na R. Jose do Ribamar, na praca de eventos. Sabado, 8h</p>
                <InfoEvent>
                  <span>25/12/2022 - 20:30</span>
                  <span>Alimentos | Roupas</span>
                </InfoEvent>
            </CardPublic>

            <CardPublic>
              <UserContainer>
                <figure>
                  <img src="https://portalcorreio.com.br/portalcorreio/arquivos/2023/01/fea5fa4cc1fc517cedb0eb0a25aae6fb.png" />
                </figure>
                <div>
                  <h3>Mais Feliz Company</h3>
                  <span>Sao Luis - Maranhao</span>
                </div>
              </UserContainer>
                <p>Evento ocorrendo na R. Jose do Ribamar, na praca de eventos. Sabado, 8h</p>
                <InfoEvent>
                  <span>25/12/2022 - 20:30</span>
                  <span>Alimentos | Roupas</span>
                </InfoEvent>
            </CardPublic>
          </ListCardContainer>
        </DonateSection>
      </MainContainer>
    </>
  );
};

export default PagePublic
