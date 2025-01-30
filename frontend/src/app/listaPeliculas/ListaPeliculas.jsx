/*src/listaPeliculas/ListaPeliculas.jsx*/

import { useEffect, useState } from "react"
import { getAllFilms } from "../pelicula/PeliculaApi";
import Pelicula from "../pelicula/Pelicula";
import PeliculaCard from "../peliculaCard/PeliculaCard";
import "/src/app/listaPeliculas/ListaPeliculas.css";

const ListaPeliculas = () => {
    const [listaPeliculas, setListaPeliculas] = useState([]);

    useEffect(() => {
        getPeliculas()
    }, [])

    const getPeliculas = async () => {
        const res = await getAllFilms();
        const newArray = res.status.map(
            (p) => new Pelicula(
            p.id,
            p.imbd,
            p.title,
            p.year,
            p.director,
            p.plot,
            p.genres,
            p.poster
        ));
    setListaPeliculas(newArray)
    console.log(newArray)
    };

    return (
        <div className="contenedor-lista">
            {listaPeliculas.map((p) => 
                <PeliculaCard key={p.id} pelicula={p}></PeliculaCard>
            )}
        </div>
    )
    
}

export default ListaPeliculas;