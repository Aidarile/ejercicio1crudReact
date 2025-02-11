const urlBase = "http://localhost:3000/api/v1";
/* Define la URL base de la API para realizar las peticiones a los endpoints correspondientes */

const getAllFilms = async () => {
    /* Función asincrónica para obtener todas las películas desde la API */
    try {
        const response = await fetch(urlBase + "/movies", {
            method: "GET" 
            /* Se realiza una solicitud GET al endpoint /movies para obtener todas las películas */
        })

        if (!response.ok) {
            throw new Error("Error al coger peliculas"); 
            /* Si la respuesta no es exitosa, se lanza un error con un mensaje personalizado */
        }

        console.log(response); 
        /* Se imprime la respuesta en la consola (para depuración) */
        
        const result = await response.json();
        /* Se espera y se parsea la respuesta como JSON */
        
        console.log(result); 
        /* Se imprime el resultado en la consola (para depuración) */
        
        return result; 
        /* Retorna el resultado de la petición, que es la lista de películas */

    } catch(err) {
        console.error(err); 
        /* En caso de error, se imprime el error en la consola */
    }
};

const postFilm = async (pelicula) => {
    /* Función asincrónica para agregar una nueva película a la API */
    try {

        const response = await fetch(urlBase + "/movies", {
            method: "POST", 
            /* Se realiza una solicitud POST para enviar una nueva película */
            body: JSON.stringify({
                imdb: {rating: 5, votes: 1000}, 
                /* Crea un objeto IMDb con una puntuación ficticia y el número de votos */
                title: pelicula.titulo, 
                /* Asigna el título de la película */
                year: pelicula.anyo, 
                /* Asigna el año de la película */
                director: pelicula.director, 
                /* Asigna el nombre del director de la película */
                plot: pelicula.plot, 
                /* Asigna la sinopsis de la película */
                genres: pelicula.generos, 
                /* Asigna los géneros de la película */
                poster: pelicula.poster 
                /* Asigna la URL del cartel de la película */
            }),
            headers: {
                "content-type": "application/json; charset = UTF-8", 
                /* Establece los encabezados para que la solicitud se envíe como JSON */
            },
        })

        if (!response.ok) {
            throw new Error("Error al crear pelicula");
            /* Si la respuesta no es exitosa, lanza un error */
        }

        console.log("Insertado"); 
        /* Si la película se agrega correctamente, se imprime un mensaje en la consola */

    } catch (err) {
        console.error(err); 
        /* En caso de error, se imprime el error en la consola */
    }
}

const deleteFilm = async (id) => {
    /* Función asincrónica para eliminar una película por su id */
    try {
        const response = await fetch(urlBase + "/movies/" + id, {
            method: "DELETE" 
            /* Se realiza una solicitud DELETE para eliminar la película con el id especificado */
        })
        
        if (!response.ok) {
            throw new Error("Error al eliminar"); 
            /* Si la respuesta no es exitosa, se lanza un error */
        }

        const result = response.json(); 
        /* Se espera y parsea la respuesta como JSON */

        return result; 
        /* Retorna el resultado de la solicitud, que generalmente será una confirmación de eliminación */

    } catch(err) {
        console.error(err); 
        /* En caso de error, se imprime el error en la consola */
    }
}

export { getAllFilms, postFilm, deleteFilm } 
/* Exporta las tres funciones para que puedan ser utilizadas en otros módulos */
