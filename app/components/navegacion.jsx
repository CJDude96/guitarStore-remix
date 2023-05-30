import { Link, useLocation } from "@remix-run/react";

const Navegacion = () => {
  const location = useLocation();
  return (
    <nav className="navegacion">
      <Link 
        to="/" 
        className={location.pathname === "/" ? "active" : null}
      >
        Inicio
      </Link>
      <Link
        to="/guitarras"
        className={location.pathname === "/guitarras" ? "active" : null}
      >
        Tienda
      </Link>
      <Link
        to="/nosotros"
        className={location.pathname === "/nosotros" ? "active" : null}
      >
        Nosotros
      </Link>
      <Link
        to="/blog"
        className={location.pathname === "/blog" ? "active" : null}
      >
        Blog
      </Link>
    </nav>
  );
};

export default Navegacion;
