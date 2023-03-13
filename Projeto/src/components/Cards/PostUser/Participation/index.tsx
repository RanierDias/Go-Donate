import ButtonMain from "../../../../styles/buttonMain";
import StyleCardParticipation from "./style";
import { iCardParticipation } from "./type";

const CardParticipation = ({
  post,
  callback,
  setSelectedCard,
}: iCardParticipation) => {
  const regExDate = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}/;
  const date = post.date.replaceAll("-", "/").match(regExDate);
  const dateFinal = post.final_date?.replaceAll("-", "/").match(regExDate);

  return (
    <>
      <StyleCardParticipation>
        <section>
          <div>
            <img src={post.image} alt="Imagem Participação" />
          </div>

          <div>
            <h2>{post.title}</h2>
          </div>

          <div>
            <p>
              {date} - {dateFinal}
            </p>
          </div>

          <div>
            <h3>
              {post.open_time} - {post.close_time}
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
        </section>
      </StyleCardParticipation>
    </>
  );
};

export default CardParticipation;
