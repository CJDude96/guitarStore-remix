import { Link } from "@remix-run/react";
import { formatDate } from "~/utils/utils";

const Post = ({ post }) => {
  const { title, content, url, image, publishedAt } = post;

  return (
    <article className="post">
      <img
        className="imagen"
        src={image.data.attributes.formats.small.url}
        alt={`${url}`}
      />
      <div className="contenido">
        <h1>{title}</h1>
        <p className="fecha">{formatDate(publishedAt)}</p>
        <p className="resumen">{content}</p>
        <Link className="enlace" to={`/blog/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
};

export default Post;
