import "./PeliculaDetalle.css";

import { deleteFilm } from "../pelicula/PeliculaApi";
/* Importa la función 'deleteFilm' desde el archivo PeliculaApi para eliminar una película */

const PeliculaDetalle = ({ pelicula, setIndex }) => {
    /* Componente funcional PeliculaDetalle que recibe 'pelicula' y 'setIndex' como props */

    const handleEliminarClick = () => {
        /* Función para manejar el clic en el botón de eliminar película */
        deleteFilm(pelicula.id); 
        /* Llama a la función 'deleteFilm' pasando el id de la película para eliminarla */
        setIndex(0); 
        /* Llama a la función 'setIndex' para reiniciar el índice a 0 (esto podría cambiar la vista actual) */
    }

    return(
        <div className="contenedor-pelicula-detalle">
            {/* Contenedor principal para mostrar los detalles de la película */}
            
            <img src={pelicula.poster} style={{ width: "15em"}} />
            {/* Muestra el póster de la película, con un tamaño fijo de 15em */}
            
            <h1>{pelicula.titulo}</h1>
            {/* Muestra el título de la película */}
            
            <h3>{pelicula.anyo}</h3>
            {/* Muestra el año de la película */}
            
            <h3>{pelicula.director}</h3>
            {/* Muestra el nombre del director de la película */}
            
            <h3>{pelicula.plot}</h3>
            {/* Muestra la sinopsis o trama de la película */}
            
            <button onClick={handleEliminarClick}>ELIMINAR PELICULA</button>
            {/* Botón para eliminar la película, ejecuta 'handleEliminarClick' al hacer clic */}
            
            <button>EDITAR PELICULA</button>
            {/* Botón para editar la película (sin funcionalidad definida en este momento) */}
        </div>
    )
}

export default PeliculaDetalle;
/* Se exporta el componente PeliculaDetalle para ser utilizado en otros archivos */
