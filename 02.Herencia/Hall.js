class Hall{
    #film;
    constructor(idHall, attendantQuantity, film){
        this.idHall = idHall;
        this.attendantQuantity = attendantQuantity
        /** Cambiar cantidad por una lista de personas que asisten
         * Y agregamos un empleado encargado de la sala
         */

        this.#film = film
    }

    get Film(){
        return this.#film;
    }

    play(){
        // Dependiendo del problema Hall puede tener la responsabilidad de
        // consultar los datos y regresarlos
        //return "Reproduciendo " + this.#film.Title + " Tiene duración de "+ this.Film.duration +
        //" Idioma: " + this.Film.language + " Clasificación: " + this.Film.rating;
        
        return this.Film.obtainInfo()
    }

    // playMovie(){
    //     return "Reproduciendo " + this.#film.Title + " Tiene duración de "+ this.Film.duration +
    //     " Idioma: " + this.Film.language + " Clasificación: " + this.Film.rating +
    //     " Actores: " + this.Film.actors + " Direcotres: " + this.Film.directors;
    // }

    // playDocumentary(){
    //     return "Reproduciendo " + this.#film.Title + " Tiene duración de "+ this.Film.duration +
    //     " Idioma: " + this.Film.language + " Clasificación: " + this.Film.rating +
    //     " Investigadores: " + this.Film.researchers;
    // }
}

export {Hall}