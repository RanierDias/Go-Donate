import ButtonMain from "../../../../styles/buttonMain";
import { iCardParticipation } from "./type";

const CardParticipation = ({
  post,
  callback,
  setSelectedCard,
}: iCardParticipation) => {
  return (
    <>
      <div>
        <img src="" alt="" />
      </div>

      <div>
        <h2>{post.title}</h2>
      </div>

      <div>
        <p>
          {post.date} - {post.final_date}
        </p>
      </div>

      <div>
        <h3>
          {post.open_time} - {post.closed_time}
        </h3>
      </div>

      <div>
        <p>{post.phone}</p>
      </div>

      <div>
        <p>{post.address}</p>
      </div>

      <ButtonMain
        onClick={() => {
          callback("participation");
          setSelectedCard(post);
        }}
      >
        Mostrar Detalhes
      </ButtonMain>
    </>
  );
};

export default CardParticipation;
