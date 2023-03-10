import { createContext, useState, useEffect } from 'react'
import { api } from '../services/api';
import { IDefaultProviderProps, IProducts } from "./@types";

export const UserContext = createContext({} as IDonateContext)

interface IDonateContext {
  posts: IProducts[]
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
    <UserContext.Provider value={{ posts, donations, setTypeModal }}>
      {children}
    </UserContext.Provider>
  )
}