import { useEffect, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import styles from "~/styles/carrito.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta() {
  return [
    { title: "GuitarStore - Carrito de compras" },
    { description: "GuitarStore, tienda de guitarras, carrito de compras" },
  ];
}

const Carrito = () => {
  const [total, setTotal] = useState(0);
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext();

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, prod) => total + prod.cantidad * prod.price,
      0
    );

    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <ClientOnly fallback={"cargando..."}>
      {() => (
        <main className="contenedor">
          <h1 className="heading">Carrito de Compras</h1>

          <div className="contenido">
            <div className="carrito">
              <h2>Articulos</h2>
              {carrito?.length === 0
                ? "El carrito se encuentra vacio!"
                : carrito?.map((prod) => (
                    <div key={prod.id} className="producto">
                      <div>
                        <img src={prod.image} alt={`Producto ${prod.name}`} />
                      </div>

                      <div>
                        <p className="nombre">{prod.name}</p>
                        <p>Cantidad:</p>

                        <select
                          value={prod.cantidad}
                          className="select"
                          onChange={(e) =>
                            actualizarCantidad({
                              cantidad: +e.target.value,
                              id: prod.id,
                            })
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>

                        <p className="precio">${prod.price}</p>
                        <p className="subtotal">
                          Subtotal: $<span>{prod.price * prod.cantidad}</span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn-eliminar"
                        onClick={() => eliminarGuitarra(prod.id)}
                      >
                        X
                      </button>
                    </div>
                  ))}
            </div>

            <aside className="resumen">
              <h3>Resumen del pedido</h3>
              <p>total a pagar: ${total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
};

export default Carrito;
