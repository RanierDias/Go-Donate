import { useEffect, useState } from "react";
import Navbar from "../../components/Header";
import Select from "../../components/Select";
import { api } from "../../services/api";
import { CardPublic, DateContainer, DonateSection, InfoEvent, ListCardContainer, MainContainer, SectionContainer, UserContainer } from "./style";

interface IPost {
  id: number
  companyId: number
  name: string
  description: string
  date: string
  time: string
  city: string
  state: string
  image: string
  type: string
}

const PagePublic = () => {
  const [post, setPost] = useState<IPost[]>([])
  const [search, setSearch] = useState('')
  const [filteredPost, setFilteredPost] = useState<IPost[]>([])

  const test = (value: string) => {
    setSearch(value)
  }

  useEffect(() => {
    setFilteredPost(post.filter(item => item.state.toLowerCase().includes(search.toLowerCase())))
  }, [post, search])

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const res = await api.get('/post')

        setPost(res.data)
        
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
            {post.map((item) => (
              <option value={item.state}>{item.state}</option>
            ))}
          </Select>
        </SectionContainer>
        <DonateSection>
          <h4>Pontos de doações</h4>

          <ListCardContainer>
            { filteredPost.length > 0 ?
                post.map((item) => (
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
              
              post.map((item) => (
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
