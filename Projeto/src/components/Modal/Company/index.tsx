import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { CompanyContext } from "../../../providers/CompanyContext";
import ButtonMain from "../../../styles/buttonMain";
import FormFundraising from "../../ModalForm/Fundraising";
import ModalBackground from "../style";

const ModalCompany = () => {
  const { setShowModal, selectedCard } = useContext(CompanyContext);

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
