import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { ModalContext } from "../../../providers/ModalContext";
import FormFundraising from "../../ModalForm/Fundraising";
import ModalBackground from "../style";

const ModalCompany = () => {
  const { setShowModal, selectedCard } = useContext(ModalContext);

  return (
    <ModalBackground>
      <div>
        <div>
          <h1>{selectedCard.title}</h1>
          <button onClick={() => setShowModal(null)}>
            <IoClose />
          </button>
        </div>

        <FormFundraising />
      </div>
    </ModalBackground>
  );
};

export default ModalCompany;
