import image from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return [
    { title: "GuitarStore - Nosotros" },
    {
      description: "Venta de guitarras, blog de musica",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: 'preload',
      href: image,
      as: 'image'
    }
  ];
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={image} alt="NosotrosImg" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ullamcorper ultricies mi, quis vulputate diam dictum vel. Maecenas
            vitae est varius, dictum sapien nec, luctus erat. Proin euismod id
            leo quis ullamcorper. Aenean volutpat, nisl at commodo sollicitudin,
            arcu magna consectetur nisl, vitae sagittis metus nulla ac ante.
            Vestibulum interdum leo non risus luctus placerat a nec est. Integer
            eu augue at ante malesuada auctor. Aliquam euismod sodales velit.
          </p>
          <p>
            Vestibulum non aliquet risus. Maecenas a nisl nec velit fringilla
            placerat. Aliquam vitae ipsum ac diam ultrices tincidunt. Nam congue
            in mi eget tristique. Ut ultricies, orci sed consectetur accumsan,
            odio eros egestas sem, vitae mollis dolor nibh scelerisque lorem.
            Integer velit ex, mattis sit amet diam suscipit, commodo lobortis
            ex. Sed ac metus elementum purus elementum fringilla. Donec
            ultricies libero in mi aliquet finibus. Proin sagittis vehicula ante
            non vehicula. Etiam consequat arcu lacus, a consequat mi ornare eu.
            Vestibulum nec nisi malesuada, pharetra nisl id, pretium lectus.
            Aenean semper nunc vel malesuada convallis. Vivamus vestibulum
            rutrum velit vel tristique. Vestibulum quis tortor mauris.
            Suspendisse commodo pretium lorem sed scelerisque. Quisque luctus id
            eros ut mattis.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
