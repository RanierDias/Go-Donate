import { createContext, useState } from "react";
import { iModalContext, iModalProvider } from "./type";

export const ModalContext = createContext({} as iModalContext);

const ModalProvider = ({ children }: iModalProvider) => {
  const [showModal, setShowModal] = useState<null | string>(null);
  const [selectedCard, setSelectedCard] = useState({} as any);

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        selectedCard,
        setSelectedCard,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider
