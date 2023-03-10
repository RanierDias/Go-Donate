import ButtonMain from "../../../styles/buttonMain";
import StyleCardUser from "./style";
import { iCardPostsUser } from "./types";

export const CardPostuser = ({ post }: iCardPostsUser) => {
  return (
    <>
      <StyleCardUser>
        <div>
          <img src={post.image} />
        </div>

        <div className="content">
          <h2>{post.name}</h2>
          <p>
            {post.city} {post.state}
          </p>
          <span>{post.date}</span>
        </div>

        <div>
          <p>{post.description}</p>
        </div>

        <ButtonMain color="white" background="primary-color">
          Participar do evento
        </ButtonMain>
      </StyleCardUser>
    </>
  );
};
