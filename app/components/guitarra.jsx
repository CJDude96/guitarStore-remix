import { Link } from "@remix-run/react";

const Guitarra = ({ guitar }) => {
  const { name, description, price, url, image } = guitar;

  return (
    <div className="guitarra">
      <img src={image?.data.attributes.formats.medium.url} alt={`Guitar ${name}`} />
      <div className="contenido">
        <h3>{name}</h3>
        <p className="descripcion">{description}</p>
        <p className="precio">${price}</p>
        <Link to={`/guitarras/${url}`}  className="enlace">Ver Producto</Link>
      </div>
    </div>
  );
};

export default Guitarra;
