import { useLoaderData } from "@remix-run/react";
import ListaPosts from "~/components/listaPosts";
import { getPosts } from "~/models/posts.server";
import styles from "~/styles/blog.css";

export function meta(){
  return [
    {title: "GuitarStore - nuestro blog"},
    {description: "GuitarStore, blog de musica, venta de guitarras"}
  ]
}

export async function loader() {
  const res = await getPosts();
  return res.data;
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

const Blog = () => {
  const posts = useLoaderData();

  return (
    <main className="contenedor">
      <ListaPosts posts={posts} />
    </main>
  );
};

export default Blog;
