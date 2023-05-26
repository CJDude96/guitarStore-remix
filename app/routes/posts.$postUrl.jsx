import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatDate } from "~/utils/utils";
import styles from "~/styles/blog.css";

export function meta({ data }) {
  if (!data) {
    return [
      {
        title: `GuitarStore - Entrada no encontrada`,
        description: `Guitarras, venta de guitarras, entrada no encontrada`,
      },
    ];
  }

  return [
    { title: `GuitarStore - ${data.data[0].attributes.title}` },
    {
      description: `Guitarras, venta de guitarras, entrada ${data.data[0].attributes.title}`,
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export async function loader({ params }) {
  const { postUrl } = params;
  const res = await getPost(postUrl);

  if (res.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Post no encontrado",
    });
  }

  return res;
}

const PostPage = () => {
  const post = useLoaderData();

  const { title, content, image, publishedAt } = post?.data[0]?.attributes;

  return (
    <article className="contenedor post mt-3">
      <img
        className="imagen"
        src={image.data.attributes.url}
        alt={`${title}`}
      />
      <div className="contenido">
        <h1>{title}</h1>
        <p className="fecha">{formatDate(publishedAt)}</p>
        <p className="texto">{content}</p>
      </div>
    </article>
  );
};

export default PostPage;
