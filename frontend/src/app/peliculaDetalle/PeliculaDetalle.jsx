/* eslint-disable react/prop-types */
/*src/app/peliculaDetalle/PeliculaDetalle.jsx*/

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
            <button onClick={handleEliminarClick}>ELIMINAR PELICULA</button>
            <button>EDITAR PELICULA</button>
        </div>
    )
}
export default PeliculaDetalle;