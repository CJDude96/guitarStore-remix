import { Link } from "@remix-run/react";
import Navegacion from "./navegacion";
import logo from "../../public/img/logo.svg";

const Headers = () => {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Navegacion />
      </div>
    </header>
  );
};

export default Headers;
