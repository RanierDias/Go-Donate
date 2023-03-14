import { createContext, useState } from "react";
import {
  IDefaultProviderProps,
  IDonate,
  IDonateContext,
  iFundraising,
  iPosts,
} from "./@types";

export const PostContext = createContext({} as IDonateContext);

export const PostProvider = ({ children }: IDefaultProviderProps) => {
  const [posts, setPosts] = useState<iPosts[]>([]);
  const [fundraising, setFundraising] = useState<iFundraising[]>([]);
  const [donations, setDonations] = useState<IDonate[]>([]);
  const [search, setSearch] = useState<any[]>([]);
  const [filter, setFilter] = useState<boolean | string>(true);
  const [isLoading, setIsLoading] = useState(false)

  return (
    <PostContext.Provider
      value={{
        isLoading,
        setIsLoading,
        posts,
        setPosts,
        fundraising,
        setFundraising,
        donations,
        setDonations,
        search,
        setSearch,
        filter,
        setFilter,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
