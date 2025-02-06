const urlBase = "http://localhost:3000/api/v1";

const getAllFilms = async () => {
    try {
        const response = await fetch(urlBase + "/movies", {
            method: "GET"
        })

        if (!response.ok) {
            throw new Error("Error al coger peliculas")
        }
        console.log(response)
        const result = await response.json();
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)
    }
};

const postFilm = async (pelicula) => {
    try {

        const response = await fetch(urlBase + "/movies", {
            method: "POST",
            body: JSON.stringify({
                imdb: {rating: 5, votes: 1000},
                title: pelicula.titulo,
                year: pelicula.anyo,
                director: pelicula.director,
                plot: pelicula.plot,
                genres: pelicula.generos,
                poster: pelicula.poster

            }),
            headers: {
                "content-type": "application/json; charset = UTF-8",
            },
        })

        if (!response.ok) {
            throw new Error("Error al crear pelicula")
        }
        console.log("Insertado");

    } catch (err) {
        console.error(err)
    }
}

const deleteFilm = async (id) => {
    try {
        const response = await fetch(urlBase + "/movies/" + id, {
            method: "DELETE"
        })
        if (!response.ok) {
            throw new Error("Error al eliminar")
        }
        const result = response.json()
        return result

    } catch(err) {
        console.error(err)

    }
}

export {getAllFilms, postFilm, deleteFilm}