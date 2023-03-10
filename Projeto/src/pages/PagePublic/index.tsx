import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Header";
import Select from "../../components/Select";
import { iPosts } from "../../providers/@types";
import { CompanyContext } from "../../providers/CompanyContext";
import { api } from "../../services/api";
import { CardPublic, DateContainer, DonateSection, InfoEvent, ListCardContainer, MainContainer, SectionContainer, UserContainer } from "./style";

const PagePublic = () => {
  const [filteredPost, setFilteredPost] = useState<iPosts[]>([])
  const {posts, setPosts, search, setSearch} = useContext(CompanyContext)

  const test = (value: string) => {
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
          <Select name='filtro' callback={test}>
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
