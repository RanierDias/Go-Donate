import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../services/api";
import {
  IDefaultProviderProps,
  IDonate,
  IDonateContext,
  iFundraising,
  iPosts,
} from "./@types";
import { IUser } from "./UserContext/@Types";
import { UserContext } from "./UserContext/UserContextInitial";

export const CompanyContext = createContext({} as IDonateContext);

export const CompanyProvider = ({ children }: IDefaultProviderProps) => {
  const [posts, setPosts] = useState<iPosts[]>([]);
  const [fundraising, setFundraising] = useState<iFundraising[]>([]);
  const [donations, setDonations] = useState<IDonate[]>([]);
  const [search, setSearch] = useState<any[]>([]);
  const [selectedCard, setSelectedCard] = useState({} as any);
  const [showModal, setShowModal] = useState<null | string>(null);
  const [filter, setFilter] = useState<boolean | string>(true);
  const [listUsers, setListUsers] = useState<IUser[]>([])

  return (
    <CompanyContext.Provider
      value={{
        posts,
        setPosts,
        fundraising,
        setFundraising,
        donations,
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
