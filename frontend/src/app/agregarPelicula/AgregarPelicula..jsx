import "./AgregarPelicula.css";
import { useState } from "react";
import { postFilm } from "../pelicula/PeliculaApi";

const AgregarPelicula = () => {
    // Estado inicial de la película con campos vacíos
    const [pelicula, setPelicula] = useState({
        titulo: "",
        director: "",
        anyo: "",
        poster: "",
        plot: "",
        generos: [], // Lista de géneros inicial vacía
    });

    // Estado para almacenar temporalmente un género antes de añadirlo a la lista
    const [genero, setGenero] = useState('');

    // Agrega el género actual a la lista de géneros de la película
    const handleAgregarGeneroClick = () => {
        setPelicula({...pelicula, generos: [...pelicula.generos, genero]});
    };

    // Envía la película al backend mediante la API
    const handleAgregarPeliculaClick = () => {
        postFilm(pelicula);
    };

    return(
        <div className="contenedor-agregar">
            {/* Campos de entrada para los datos de la película */}
            <label>Titulo</label>
            <input type="text" onChange={(e) => setPelicula({...pelicula, titulo: e.target.value})}/>
            
            <label>Director</label>
            <input type="text" onChange={(e) => setPelicula({...pelicula, director: e.target.value})}/>
            
            <label>Año</label>
            <input type="number" onChange={(e) => setPelicula({...pelicula, anyo: Number(e.target.value)})}/>
            
            <label>Poster</label>
            <input type="text" onChange={(e) => setPelicula({...pelicula, poster: e.target.value})}/>
            
            <label>Plot</label>
            <input type="text" onChange={(e) => setPelicula({...pelicula, plot: e.target.value})}/>
            
            {/* Entrada para los géneros de la película */}
            <label>Géneros</label>
            <div className="agregar-contenido-genero">
                <input type="text" onChange={(e) => setGenero(e.target.value)}/>
                <button onClick={handleAgregarGeneroClick}>AÑADIR GÉNERO</button>
            </div>
            
            {/* Muestra la lista de géneros agregados */}
            {pelicula.generos.length > 0 && pelicula.generos.map((g) => 
                <p key={g}>{g}</p>
            )}
            
            {/* Botón para agregar la película */}
            <button onClick={handleAgregarPeliculaClick}>AGREGAR PELÍCULA</button>
        </div>
    );
}

export default AgregarPelicula;
