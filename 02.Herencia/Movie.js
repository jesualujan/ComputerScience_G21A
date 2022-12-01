import { Film } from "./Film.js"

class Movie extends Film {
    constructor(title, duration, language, rating, actors, directors){
        super(title, duration, language, rating) // Superclase
        this.actors = actors;
        this.directors = directors;
    }

    // Sobreescribimos el método de la superclase Film
    obtainInfo(){
        return "<section>Reproduciendo " + this.Title+ "<br>" + " Tiene duración de "+ this.duration+ "<br>" +
        " Idioma: " + this.language+ "<br>" + " Clasificación: " + this.rating+ "<br>" +
        " Actores: " + this.actors+ "<br>" + " Directores: " + this.directors + "</section>";
    }
}

export {Movie}