import "./PeliculaDetalle.css"

import { deleteFilm } from "../pelicula/PeliculaApi";

const PeliculaDetalle = ({pelicula, setIndex}) => {

    const handleEliminarClick = () => {
        deleteFilm(pelicula.id);
        setIndex(0);
    }

    return(
        <div className="contenedor-pelicula-detalle">
            <img src={pelicula.poster} style={{ width: "15em"}}/>
            <h1>{pelicula.titulo}</h1>
            <h3>{pelicula.anyo}</h3>
            <h3>{pelicula.director}</h3>
            <h3>{pelicula.plot}</h3>

            <button onClick={handleEliminarClick}>ELIMINAR PELICULA</button>
            <button>EDITAR PELICULA</button>
        </div>
    )
}
export default PeliculaDetalle;