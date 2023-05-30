import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitarras.server";
import ListaGuitarras from "~/components/listaGuitarras";
import styles from "~/styles/guitarras.css";

export function meta() {
  return [
    { title: "GuitarStore - Tienda" },
    {
      description: "GuitarStore - nuestra colección de guitarras",
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

export async function loader() {
  const guitars = await getGuitars();
  return guitars.data;
}

const Tienda = () => {
  const guitars = useLoaderData();

  return (
    <main className="contenedor">
      <ListaGuitarras guitars={guitars} />
    </main>
  );
};

export default Tienda;
