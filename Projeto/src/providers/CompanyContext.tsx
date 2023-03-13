import { createContext, useState } from "react";
import {
  IDefaultProviderProps,
  IDonate,
  IDonateContext,
  iFundraising,
  iPosts,
} from "./@types";

export const CompanyContext = createContext({} as IDonateContext);

export const CompanyProvider = ({ children }: IDefaultProviderProps) => {
  const [posts, setPosts] = useState<iPosts[]>([]);
  const [fundraising, setFundraising] = useState<iFundraising[]>([]);
  const [donations, setDonations] = useState<IDonate[]>([]);
  const [search, setSearch] = useState<any[]>([]);
  const [selectedCard, setSelectedCard] = useState({} as any);
  const [showModal, setShowModal] = useState<null | string>(null);
  const [filter, setFilter] = useState<boolean | string>(true);
  const [isLoading, setIsLoading] = useState(false)

  return (
    <CompanyContext.Provider
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
        selectedCard,
        setSelectedCard,
        showModal,
        setShowModal,
        filter,
        setFilter,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
