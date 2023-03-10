import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../services/api";
import {
  IDefaultProviderProps,
  IDonate,
  IDonateContext,
  iFundraising,
  iPostCompany,
  iPosts,
} from "./@types";
import { UserContext } from "./UserContext/UserContextInitial";

export const CompanyContext = createContext({} as IDonateContext);

export const CompanyProvider = ({ children }: IDefaultProviderProps) => {
  const [posts, setPosts] = useState<iPosts[]>([]);
  const [fundraising, setFundraising] = useState<iFundraising[]>([]);
  const [donations, setDonations] = useState<IDonate[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCard, setSelectedCard] = useState({} as any);
  const [showModal, setShowModal] = useState<null | string>(null);
  const [filter, setFilter] = useState<boolean | string>(true);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await api.get("/post");

        setPosts(res.data);

        console.log(posts);
      } catch (error) {
        console.log(error);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("@userToken");

    const getDonations = async () => {
      try {
        const res = await api.get("/donation", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setDonations(res.data);
        console.log(res.data);
        console.log(donations);
      } catch (error) {
        console.log(error);
      }
    };
    getDonations();
  }, []);

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
