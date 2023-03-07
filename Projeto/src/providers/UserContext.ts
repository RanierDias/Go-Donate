import { createContext, useState, useEffect } from 'react'
import { api } from '../services/api';
import { IDefaultProviderProps, IProducts } from "./@types";

export const UserContext = createContext({} as IDonateContext)

interface IDonateContext {
  posts: IProducts[]
}

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [posts, setPosts] = useState<IProducts[]>([])

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

  // return (
  //   <UserContext.Provider value={{ posts }}>
  //     {children}
  //   </UserContext.Provider>
  // )
}