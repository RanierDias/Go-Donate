import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Header";
import Select from "../../components/Select";
import { iPosts } from "../../providers/@types";
import { CompanyContext } from "../../providers/CompanyContext";
import { api } from "../../services/api";
import { CardPublic, DateContainer, DonateSection, InfoEvent, ListCardContainer, MainContainer, SectionContainer, UserContainer } from "./style";

const PagePublic = () => {
  const [filteredPost, setFilteredPost] = useState<iPosts[]>([])
  const { posts, setPosts, search, setSearch } = useContext(CompanyContext)
  
  const filterState = (value: string) => {
    const postFiltered = posts.filter(post => post.state === value)
    setFilteredPost(postFiltered)
  }

  // useEffect(() => {
  //   setFilteredPost(posts.filter(item => item.state.toLowerCase().includes(search.toLowerCase())))
  // }, [posts, search])

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const res = await api.get('/post')

        setPosts(res.data)
        
      } catch (error) {

        console.log(error)

      }
    }
    getCompanies()
  }, [])

  const states = [
    { name: 'Acre', sigla: 'AC' },
    { name: 'Alagoas', sigla: 'AL' },
    { name: 'Amapá', sigla: 'AP' },
    { name: 'Amazonas', sigla: 'AM' },
    { name: 'Bahia', sigla: 'BA' },
    { name: 'Ceará', sigla: 'CE' },
    { name: 'Distrito Federal', sigla: 'DF' },
    { name: 'Espírito Santo', sigla: 'ES' },
    { name: 'Goiás', sigla: 'GO' },
    { name: 'Maranhão', sigla: 'MA' },
    { name: 'Mato Grosso', sigla: 'MT' },
    { name: 'Mato Grosso do Sul', sigla: 'MS' },
    { name: 'Minas Gerais', sigla: 'MG' },
    { name: 'Pará', sigla: 'PA' },
    { name: 'Paraíba', sigla: 'PB' },
    { name: 'Paraná', sigla: 'PR' },
    { name: 'Pernambuco', sigla: 'PE' },
    { name: 'Piauí', sigla: 'PI' },
    { name: 'Rio de Janeiro', sigla: 'RJ' },
    { name: 'Rio Grande do Norte', sigla: 'RN' },
    { name: 'Rio Grande do Sul', sigla: 'RS' },
    { name: 'Rondônia', sigla: 'RO' },
    { name: 'Roraima', sigla: 'RR' },
    { name: 'Santa Catarina', sigla: 'SC' },
    { name: 'São Paulo', sigla: 'SP' },
    { name: 'Sergipe', sigla: 'SE' },
    { name: 'Tocantins', sigla: 'TO' }
  ];
  

  return (
    <>
      <Navbar mode="public"/>
      <MainContainer>
        <SectionContainer>
          <div>
            <h3>Principais Campanhas</h3>
            <DateContainer>
              <span>Hoje |</span>
              <span>Dia 06 |</span>
              <span>Segunda-feira</span>
            </DateContainer>
          </div>
          <Select name='filtro' callback={filterState}>
            <option value="">Selecione o estado</option>
            {posts.map((item) => (
              <option value={item.state}>{item.state}</option>
            ))}
          </Select>
        </SectionContainer>
        <DonateSection>
          <h4>Pontos de doações</h4>

          <ListCardContainer>
            { filteredPost.length > 0 ?
                filteredPost.map((item) => (
                <CardPublic key={item.id}>
                  <UserContainer>
                    <figure>
                      <img src={item.image} />
                    </figure>
                    <div>
                      <h3>{item.name}</h3>
                      <span>{item.city} - {item.state}</span>
                    </div>
                  </UserContainer>
                  <p>{item.description}</p>
                    <InfoEvent>
                    <span>{item.date} - {item.time}</span>
                      <span>{item.type}</span>
                    </InfoEvent>
                </CardPublic>
                ))
          
              :
              
              posts.map((item) => (
                <CardPublic key={item.id}>
                  <UserContainer>
                    <figure>
                      <img src={item.image} />
                    </figure>
                    <div>
                      <h3>{item.name}</h3>
                      <span>{item.city} - {item.state}</span>
                    </div>
                  </UserContainer>
                  <p>{item.description}</p>
                    <InfoEvent>
                    <span>{item.date} - {item.time}</span>
                      <span>{item.type}</span>
                    </InfoEvent>
                </CardPublic>
              ))
            }

          </ListCardContainer>
        </DonateSection>
      </MainContainer>
    </>
  );
};

export default PagePublic
