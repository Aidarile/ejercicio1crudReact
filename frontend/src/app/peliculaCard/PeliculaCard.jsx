/* eslint-disable react/prop-types */

import "/src/app/peliculaCard/PeliculaCard.css";

const PeliculaCard = ({pelicula, peliculaDetalle}) => {
    return(
        <div className="pelicula-card" onClick={() => peliculaDetalle(pelicula)}>
            <div className="pelicula-card-poster">
                <img src={pelicula.poster}/>
            </div>
            <div className="pelicula-card-datos">
                <p>{pelicula.titulo}</p>
                <p className="pelicula-card-anyo">{pelicula.anyo}</p>
            </div>

        </div>
    )
}

export default PeliculaCard;