import { iCardPostsUser } from "./types";

export const CardPostuser = ({ post }: iCardPostsUser) => {
  return (
    <>
      <div>
        <img src="" alt="" />
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

      <button
        onClick={() => {
          // setCart([...cart, post]);
        }}
      ></button>
    </>
  );
};
