import { useParams } from "react-router-dom";
import style from "./DetailView.module.scss";
import { Post } from "../../models/post.model";

const DetailView = ({ posts }: { posts: Post[] }) => {
  const { id } = useParams<{ id: string }>();

  const post = posts.find((post) => post.id === Number(id));

  return (
    <div>
      <h1 className={style.title}>{post?.title.toUpperCase()}</h1>
      <p className={style.text}>
        {String(post?.body.charAt(0).toUpperCase()) + post?.body.slice(1)}
      </p>
    </div>
  );
};

export default DetailView;
