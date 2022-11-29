
class Estudiante{
    constructor(id, nombreDeAlumno, apellidoP, apellidoM, fechaNacimiento, sexo){
        this.id = id;
        this.nombre = nombreDeAlumno;
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.fechaNacimiento = fechaNacimiento; // tipo Date
        this.sexo = sexo;
        this.calificacion = 0;
    }

    // Atributo protegido, es decir no lo puedes modificar
    // Cada vez que lo consultes, se recalcula solo
    get edad(){
        let hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();

        if(hoy.getMonth() <= this.fechaNacimiento.getMonth()
        && hoy.getDate() < this.fechaNacimiento.getDate()){
            // cumple 28(cumpleaños) pero estamos en 05(hoy)
            edad--;
        }

        return edad;
    }

    get aprobado(){
        return this.calificacion > 6;
    }

    setCalificacion(numero){
        this.calificacion = numero
    }

    componente(){
        return `
        <section id='estudiante-${this.id}'>
            <h2>${this.nombre} ${this.apellidoP} ${this.apellidoM}</h2>
            <p><b>Edad</b>: ${this.edad}</p>
            <p><b>Sexo</b>: ${this.sexo}</p>
            <p><b>Calificacion</b>: ${this.calificacion}</p>
            <p><b>Aprobado</b>: ${this.aprobado}</p>
        </section>
        `
    }

    cambiarColor(){
        let MAX_COLOR = 16777215; // # FF FF FF - Hecadecimal
        let colorAleatorio = Math.floor(Math.random() * MAX_COLOR);

        // Obtenemos el complemento
        let colorNegativo = MAX_COLOR - colorAleatorio;

        document.getElementById("estudiante-"+this.id).style.backgroundColor = "#"+colorAleatorio.toString(16);
    }
}

let luis = new Estudiante(0, "Luis", "Jesus", "Rodriguez", new Date("1989-11-17 "), "Hombre");
let carlos = new Estudiante(1, "Carlos", "Jesus", "Rodriguez", new Date("1989-11-18 "), "Hombre");
let eduardo = new Estudiante(2, "Eduardo", "Jesus", "Rodriguez", new Date("1989-11-19 "), "Hombre");
let edwin = new Estudiante(3, "Edwin", "Jesus", "Rodriguez", new Date("1989-11-20 "), "Hombre");


document.write(luis.componente())
luis.cambiarColor()
luis.setCalificacion(7)

document.write(carlos.componente())
carlos.cambiarColor()
carlos.setCalificacion(7)

document.write(eduardo.componente())
eduardo.cambiarColor()
luis.setCalificacion(7)

document.write(edwin.componente())
edwin.cambiarColor()
luis.setCalificacion(7)