class Felino
{
    // Atributos
    color = "naranja"
    tamanio = 1
    nombre = "gato"

    //Constructor
    constructor(color, tamanio, nombre){
        // this refiere a la instancia u objeto creado
        this.color = color;
        this.tamanio = tamanio;
        this.nombre = nombre;
    }

    // Métodos
    correr(){
        console.log("El "+this.nombre+" está corriendo")
    }
}

// Para Node JS

let gatito = new Felino("gris", 2, "gatito")

// Un tigre colosal de 80 m
let tigre = new Felino("blanco", 80, "tigre")

let leopardo = new Felino("negro", 2, "leopardo")


gatito.correr()
console.log(gatito.color)
console.log(gatito.nombre)

tigre.correr()
console.log(tigre.color)
console.log(tigre.nombre)

leopardo.correr()
console.log(leopardo.color)
console.log(leopardo.nombre)

gatito.correr()
console.log(gatito.color)
console.log(gatito.nombre)