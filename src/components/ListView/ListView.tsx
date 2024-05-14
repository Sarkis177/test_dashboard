import { Link } from "react-router-dom";
import style from "./ListView.module.scss";
import { Post } from "../../models/post.model";

const ListView = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className={style.ul}>
      {posts.map((post) => (
        <li className={style.li} key={post.id}>
          <Link className={style.link} to={`/post/${post.id}`}>
            {post.title.toUpperCase()}
          </Link>
          <p>
            {String(post.body.charAt(0).toUpperCase()) +
              post?.body.slice(1).substring(0, 100)}
            ...
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ListView;
