import { useLoaderData } from "@remix-run/react";
import { getGuitar } from "~/models/guitarras.server";
import styles from "~/styles/guitarras.css";

export async function loader({ params }) {
  const { guitarUrl } = params;
  const res = await getGuitar(guitarUrl);
  
  if(res.data.length === 0){
    throw new Response('', {
      status: 404,
      statusText: "Guitarra no encontrada"
    })
  }
  
  return res;
}

export function meta({ data }) {

  if(!data){
    return [
      { title: `GuitarStore - Guitarra no encontrada` ,
        description: `Guitarras, venta de guitarras, guitarra no encontrada`,
      },
    ];
  }

  return [
    { title: `GuitarStore - ${data.data[0].attributes.name}` },
    {
      description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.name}`,
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


const GuitarraPage = () => {
  const data = useLoaderData();
  const { name, description, image, price } = data?.data[0].attributes;

  return (
    <main className="contenedor guitarra no-shadow">
      <img
        src={image.data.attributes.url}
        alt={`Guitar ${name}`}
        className="imagen"
      />
      <div className="contenido">
        <h3 className="nombre">{name}</h3>
        <p className="texto">{description}</p>
        <p className="precio">${price}</p>
      </div>
    </main>
  );
};

export default GuitarraPage;
