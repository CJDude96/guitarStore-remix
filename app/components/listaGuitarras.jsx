import Guitarra from "./guitarra"

const ListaGuitarras = ({guitars}) => {
  return (
    <>
        <h2 className="heading">Nuestra Colección</h2>
        {guitars?.length && (
          <div className="guitarras-grid">
            {guitars?.map((guitar) => (
              <Guitarra key={guitar?.id} guitar={guitar?.attributes} />
            ))}
          </div>
        )}
    </>
  )
}

export default ListaGuitarras