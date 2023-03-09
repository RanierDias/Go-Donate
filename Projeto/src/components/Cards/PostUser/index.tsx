import ButtonMain from "../../../styles/buttonMain";
import ButtonSmall from "../../../styles/buttonSmall";
import StyleCardUser from "./style";
import { iCardPostsUser } from "./types";

export const CardPostuser = ({ post }: iCardPostsUser) => {
  return (
    <>
      <StyleCardUser>
        <div>
          <img src="./src/img/userflat.svg" alt="" />
        </div>

        <div className="content">
          <h2>{post.name}</h2>
          <p>
            {post.city} {post.state}
          </p>
          <span>{post.date}</span>
        </div>

        <div>
          <h2>{post.description}</h2>
        </div>

        <ButtonMain color="white" background="primary-color">
          Participar do evento
        </ButtonMain>
      </StyleCardUser>
    </>
  );
};
