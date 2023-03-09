import { createContext, useState, useEffect } from 'react'
import { api } from '../services/api';
import { IDefaultProviderProps, IProducts } from "./@types";

export const UserContext = createContext({} as IDonateContext)

interface IDonateContext {
  posts: IProducts[]
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  setTypeModal: React.Dispatch<React.SetStateAction<string>>
  donations: IDonate[]
}

interface IDonate {
  uuidCompany: string
  uuidUser: string
  id: number
  postId: number
  role: string
  participated: string
}

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [posts, setPosts] = useState<IProducts[]>([])
  const [donations, setDonations] = useState<IDonate[]>([])
  const [modal, setModal] = useState(false)
  const [typeModal, setTypeModal] = useState('')

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await api.get('/post')

        setPosts(res.data)

        console.log(posts)
        
      } catch (error) {
        console.log(error)
      }
    }
    loadProducts()
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('@userToken')
    
    const getDonations = async () => {
      try {
        const res = await api.get('/donation', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        
        setDonations(res.data)
        console.log(res.data)
        console.log(donations)

      } catch (error) {
        
        console.log(error)
        
    }
  }
  getDonations()
  }, [])

  return (
    <UserContext.Provider value={{ posts, donations, modal, setModal, setTypeModal }}>
      {children}
    </UserContext.Provider>
  )
}