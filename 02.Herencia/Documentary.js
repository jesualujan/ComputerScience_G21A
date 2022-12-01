import {Film} from "./Film.js"

class Documentary extends Film{
    constructor(title, duration, language, rating, researchers){
        super(title, duration, language, rating); // Superclase
        this.researchers = researchers
    }

    // Sobreescribimos el método de la superclase Film
    obtainInfo(){
        return "<section>Reproduciendo " + this.Title+ "<br>" + " Tiene duración de "+ this.duration+ "<br>" +
        " Idioma: " + this.language+ "<br>" + " Clasificación: " + this.rating+ "<br>" +
        " Investigadores: " + this.researchers + "</section>";
    }
}

export {Documentary}