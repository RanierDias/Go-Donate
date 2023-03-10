import { IoClose } from "react-icons/io5";
import ButtonMain from "../../../styles/buttonMain";
import FormFundraising from "../../ModalForm/Fundraising";
import ModalBackground from "../style";
import { iModalCompany } from "./types";

const ModalCompany = ({ callback, selectedPost }: iModalCompany) => {
  return (
    <ModalBackground>
      <div>
        <div>
          <h1>Teste</h1>
          <button onClick={() => callback(null)}>
            <IoClose />
          </button>
        </div>
        
        <FormFundraising post={selectedPost}/>
      </div>
    </ModalBackground>
  );
};

export default ModalCompany;
