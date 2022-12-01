class Film {
    #title;

    constructor(title, duration, language, rating){
        // Para proteger datos usamos #
        this.#title = title
        this.duration = duration
        this.language = language
        this.rating = rating
    }

    // Metodo
    getTitle(){
        return this.#title
    }

    // Dato Protegido por el método get Title
    get Title(){
        return this.#title
    }

    set Title( title ){
        this.#title = title
    }

    obtainInfo(){
        return " <section>Reproduciendo " + this.Title+ "<br>" + " Tiene duración de "+ this.duration + "<br>" +
        " Idioma: " + this.language+ "<br>" + " Clasificación: " + this.rating + "</section>";
    }

}

export { Film }