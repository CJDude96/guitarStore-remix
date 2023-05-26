import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitarras.server";
import Guitarra from "~/components/guitarra";
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
  return guitars;
}

const Tienda = () => {
  const { data } = useLoaderData();

  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra Colección</h2>
      {data?.length && (
        <div className="guitarras-grid">
          {data?.map((guitar) => (
            <Guitarra key={guitar?.id} guitar={guitar?.attributes} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Tienda;
