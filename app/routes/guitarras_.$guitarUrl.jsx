import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
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

  const data = useOutletContext()
  const [ cantidad, setCantidad ] = useState(0)
  const guitarra = useLoaderData();
  const { name, description, image, price } = guitarra?.data[0].attributes;

  const handleSubmit = e => {
    e.preventDefault()
    if(cantidad < 1){
      alert("Debes seleccionar una cantidad!")
      return
    }

    const selectedGuitar = {
      id: guitarra.data[0].id,
      name,
      price,
      image: image.data.attributes.url,
      cantidad
    }

    data.addCarrito(selectedGuitar)
  }

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

        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="cantidad">Cantidad</label>
          <select 
            name="cantidad" 
            id="cantidad"
            onChange={e => setCantidad(+e.target.value)}  
          >
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </main>
  );
};

export default GuitarraPage;
