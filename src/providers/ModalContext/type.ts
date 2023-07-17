export interface iModalProvider {
  children: React.ReactNode;
}

export interface iModalContext {
  showModal: string | null;
  setShowModal: React.Dispatch<React.SetStateAction<string | null>>;
  selectedCard: any;
  setSelectedCard: React.Dispatch<React.SetStateAction<any>>;
}
