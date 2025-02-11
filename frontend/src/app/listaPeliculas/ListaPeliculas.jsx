/* eslint-disable react/prop-types */


import { useEffect, useState } from "react"; 
import { getAllFilms } from "../pelicula/PeliculaApi";
import Pelicula from "../pelicula/Pelicula"; 
import PeliculaCard from "../peliculaCard/PeliculaCard"; 
import "/src/app/listaPeliculas/ListaPeliculas.css";

const ListaPeliculas = ({ peliculaDetalle }) => { 
    /* Componente funcional ListaPeliculas, recibe peliculaDetalle como prop */

    const [listaPeliculas, setListaPeliculas] = useState([]); 
    /* Hook useState para almacenar la lista de películas que se obtiene desde la API */

    useEffect(() => {
        getPeliculas(); 
    /* Se usa useEffect para ejecutar la función getPeliculas una sola vez después de que el componente se monta */
    }, []); 

    const getPeliculas = async () => { 
        /* Función asincrónica que obtiene todas las películas desde la API */

        const res = await getAllFilms(); 
        /* Llama a la función getAllFilms para obtener la lista de películas de la API */
        
        const newArray = res.status.map(
            (p) => new Pelicula(
                p._id, 
                p.imbd, 
                p.title, 
                p.year, 
                p.director, 
                p.plot, 
                p.genres, 
                p.poster 
            )
        ); 
        /* Se mapea la respuesta para crear una nueva instancia de la clase Pelicula con los datos de cada película */
        
        setListaPeliculas(newArray); 
        /* Se actualiza el estado listaPeliculas con el nuevo array de objetos Pelicula */
        
        console.log(newArray); 
        /* Se imprime el array de películas en la consola para verificar su contenido */
    };

    return (
        <div className="contenedor-lista">
            {listaPeliculas.map((p) => 
                <PeliculaCard 
                    key={p.id} /* Se usa el id de la película como clave para cada tarjeta */
                    pelicula={p} /* Se pasa la película completa como prop al componente PeliculaCard */
                    peliculaDetalle={peliculaDetalle} /* Se pasa el prop peliculaDetalle al componente PeliculaCard */
                />
            )}
        </div>
    );
    /* Se mapea el array listaPeliculas para generar un componente PeliculaCard por cada película */
};

export default ListaPeliculas; 
/* Se exporta el componente ListaPeliculas para su uso en otros lugares */
