/* eslint-disable react/prop-types */

import "/src/app/peliculaCard/PeliculaCard.css";

const PeliculaCard = ({ pelicula, peliculaDetalle }) => {
    /* Componente funcional PeliculaCard, recibe 'pelicula' y 'peliculaDetalle' como props */

    return(
        <div className="pelicula-card" onClick={() => peliculaDetalle(pelicula)}>
            {/* Contenedor principal de la tarjeta de película, que ejecuta 'peliculaDetalle' al hacer clic */}
            
            <div className="pelicula-card-poster">
                {/* Contenedor para el póster de la película */}
                <img src={pelicula.poster} alt={pelicula.titulo} />
                {/* Imagen del póster de la película, se toma de la propiedad 'poster' de la película */}
            </div>
            
            <div className="pelicula-card-datos">
                {/* Contenedor para los datos de la película */}
                <p>{pelicula.titulo}</p>
                {/* Muestra el título de la película */}
                <p className="pelicula-card-anyo">{pelicula.anyo}</p>
                {/* Muestra el año de la película */}
            </div>
        </div>
    );
}

export default PeliculaCard;
