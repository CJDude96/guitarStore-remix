import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import { getCurso } from "~/models/curso.server";
import ListaGuitarras from "~/components/listaGuitarras";
import ListaPosts from "~/components/listaPosts";
import Curso from "~/components/curso";
import stylesGuitarras from "~/styles/guitarras.css";
import stylesPosts from "~/styles/blog.css";
import stylesCurso from "~/styles/curso.css"

export function meta() {}

export async function loader() {
  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCurso(),
  ]);

  return {
    guitars: guitars.data,
    posts: posts.data,
    course: course.data.attributes,
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras,
    },
    {
      rel: "stylesheet",
      href: stylesPosts,
    },
    {
      rel: "stylesheet",
      href: stylesCurso,
    },
  ];
}

const Index = () => {
  
  const { guitars, posts, course } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListaGuitarras guitars={guitars} />
      </main>

      <Curso course={course} />

      <section className="contenedor">
        <ListaPosts posts={posts} />
      </section>
    </>
  );
};

export default Index;
