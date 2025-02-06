/* eslint-disable no-undef */
/*src/app/agregarPelicula/AgregarPelicula.jsx*/

import { useState } from "react"
import { postFilm } from "../pelicula/PeliculaApi";

const AgregarPelicula = () => {
    const [pelicula, setPelicula] = useState({
        titulo: "",
        director: "",
        anyo: "",
        poster: "",
        plot: "",
        generos: [],
    });
    const [genero, setGenero] = useState('');

    const handleAgregarGeneroClick = () => {
        setPelicula({...pelicula, generos: [...pelicula.generos, genero]})
    };

    const handleAgregarPeliculaClick = () => {
        postFilm(pelicula);
    };

    return(
        <div className="contenedor-agregar">
            <label>Titulo</label>
            <input type="text" onChange={(e) => setPelicula({...pelicula, titulo: e.target.value})}/>
            <label>Director</label>
            <input type="text" onChange={(e) => setPelicula({...pelicula, director: e.target.value})}/>
            <label>Año</label>
            <input type="number" onChange={(e) => setPelicula({...pelicula, anyo:Number(e.target.value)})}/>
            <label>Poster</label>
            <input type="text" onChange={(e) => setPelicula({...pelicula, poster: e.target.value})}/>
            <label>Plot</label>
            <input type="text" onChange={(e) => setPelicula({...pelicula, plot: e.target.value})}/>
            <label>Generos</label>
            

            <div className="agregar-contenido-genero">
                <input type="text" onChange={(e) => setGenero(e.target.value)}/>
                <button onClick={handleAgregarGeneroClick}>AÑADIR GENERO</button>
            </div>
        
            {pelicula.generos != null &&
            pelicula.generos.map((g) => 
                <p key={g}> {g} </p>)}

            <button onClick={handleAgregarPeliculaClick}>AGREGAR PELICULA</button>

        </div>
    )
}

export default AgregarPelicula;