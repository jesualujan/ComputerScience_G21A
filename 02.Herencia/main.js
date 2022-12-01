
import { Cinema, miFuncion } from "./Cinema.js"
import { Film } from "./Film.js";
import { Hall } from "./Hall.js"
import { Movie } from "./Movie.js";
import { Documentary } from "./Documentary.js"


let largometraje = new Film("Halloween", "150 min", "Inglés", "R");
let sala1 = new Hall("SALA01", 100, largometraje);
let cinepolisGalerias = new Cinema(sala1);

let pelicula = new Movie("Titanic", "220 min", "Español(lat)", "B", [
    "Leonardo DiCaprio", " Kathy Bates", "Bill Paxton"], 
    ["James Cameron"])
let sala2 = new Hall("SALA02", 150, pelicula);
let cinepolisPabellon = new Cinema(sala2);

let documental = new Documentary("Cowspiracy and Down to earth","90 min","Inglés","A", 
["Eduardo Heinize", " Gerardo Puertos", "Paloma Garrido"])
let sala3 = new Hall("SALA03", 200, documental)
let cine3D = new Cinema(sala3)

let html1 = cinepolisGalerias.playHall()
let html2 = cinepolisPabellon.playHall()
let html3 = cine3D.playHall()

document.getElementsByTagName("body")[0].innerHTML = html1 +html2 +html3

// Usar Create Element
document.createElement("p", html1)

// Usando funcion importada
//miFuncion();


/** Ejercicio: Colocar la informacion de los largometrajes en el HTML */