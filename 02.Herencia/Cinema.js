class Cinema{

    // Cambiar a muchas salas
    constructor(hall){
        this.hall = hall;
    }

    playHall(){
        // Nuestra sala empieza a reproducir el largometraje
        console.log(this.hall.play())

        // Aqui regresamos lo que pondremos en el HTML
        return this.hall.play();

        /**
         * Para no hacer la siguiente atrosidad, podemos cambiar
         * la responsabilidad de obtener ciertos datos a la misma
         * superclase que contendra estos datos
         */
        // if ( this.hall.Film instanceof Movie)
        //     console.log(this.hall.playMovie())
        // else if( this.hall.Film instanceof Documentary )
        //     console.log(this.hall.playDocumentary())
    }
}

// Extra: Cómo compartir mas elementos de un mismo archivo
export function miFuncion(){
    console.log("Hola")
}

// Exportando la plantilla o clase o funion
export {Cinema}