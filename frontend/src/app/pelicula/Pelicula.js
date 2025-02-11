class Pelicula {   /* Definición de la clase Pelicula para representar una película */
    constructor(id, imdb, titulo, anyo, director, plot, generos, poster) {  /* Constructor que inicializa los atributos de la clase con los valores pasados como parámetros */
        this.id = id;
        this.imdb = imdb;
        this.titulo = titulo;
        this.anyo = anyo;
        this.director = director;
        this.plot = plot;
        this.generos = generos;
        this.poster = poster;

    }
}

export default Pelicula;