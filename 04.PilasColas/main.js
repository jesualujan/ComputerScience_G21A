

class Pila{
    constructor(){
        this.stack = [];
    }

    push(data){
        this.stack.push(data);
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        if (this.stack.length < 1)
            return null
        return this.stack[this.stack.length - 1];
    }

    print(){
        console.log(this.peek());
    }

    printStack(){
        console.log(this.stack);
    }

    size(){
        return this.stack.length;
    }
}

let pilita = new Pila();

pilita.print();
console.log(pilita.size());
pilita.push(1234); // *void
pilita.print();
pilita.push("ROJO")
pilita.print();
console.log(pilita.size());

pilita.printStack();

// Laberitntos
// - Encontrar la solución. Recursividad.
// Caminos
// - Encontrar rutas optimas
// Logistica
// - Que tanto puedo llevar en un barquito. Algoritmos de programación dinámica usa pilas y tablas
// - Usar barcos, aviones o simplemente camionetas. Decisiones

class Cola {
    constructor(){
        this.collection = []; // hay metodos como isEmpty con los que es importante que collection sea un dato privado
    }

    enqueue(element){
        this.collection.push(element)
        return this.collection[this.collection.length - 1]
    }

    dequeue (){
        return this.collection.shift()
    }

    // Nos dice si la cola esta vacia o no
    isEmpty(){
        return this.collection.length == 0
    }

    // Reemplazamos peek por:
    front(){// Que podríamos mejorar para que no haya errores
        if (this.collection.length < 1)
            return null
        return this.collection[0]
    }

    back(){
        if (this.collection.length < 1)
            return null
        return this.collection[this.collection.length-1]
    }

    size(){
        return this.collection.length
    }

    print(){
        console.log("Front: " + this.front() + " Back: " + this.back())
    }

    printQueue(){
        console.log(this.collection)
    }

}

let serpienteComeSuperheroes = new Cola();

if(serpienteComeSuperheroes.isEmpty()){
    console.log("Mi serpiente tiene HAMBRE")
}else{
    console.log("No tiene tanta hambre")
}

serpienteComeSuperheroes.enqueue({nombre: "BATMAN", sexo:"M"})

console.log("La serpiente se comio a " + serpienteComeSuperheroes.back().nombre)

serpienteComeSuperheroes.enqueue({nombre: "SUPERMAN", sexo:"M"})

console.log("La serpiente se comio a " + serpienteComeSuperheroes.back().nombre)

serpienteComeSuperheroes.enqueue({nombre: "WONDER WOMAN", sexo:"F"})

console.log("La serpiente se comio a " + serpienteComeSuperheroes.back().nombre)

if(serpienteComeSuperheroes.isEmpty()){
    console.log("Mi serpiente tiene HAMBRE")
}else if( serpienteComeSuperheroes.size() < 4){
    console.log("No tiene tanta hambre. Pero quiere comer más")
}else{
    console.log("Está a reventar la serpiente")
}

serpienteComeSuperheroes.enqueue({nombre: "NOVA", sexo:"M"})
serpienteComeSuperheroes.enqueue({nombre: "FLASH", sexo:"M"})


if(serpienteComeSuperheroes.isEmpty()){
    console.log("Mi serpiente tiene HAMBRE")
}else if( serpienteComeSuperheroes.size() < 4){
    console.log("No tiene tanta hambre. Pero quiere comer más")
}else{
    console.log("Está a reventar la serpiente")
}

console.log("BREAKING NEWS: Batman perfora a la serpiente para escapar")

console.log("Escapa " + serpienteComeSuperheroes.dequeue().nombre)


// Para comentar en Windows y linux CTRL + }
// Y en MacOS es Command + /
// for(var i = 0; i < serpienteComeSuperheroes.size(); i++){
//     console.log("Escapa " + serpienteComeSuperheroes.dequeue().nombre)
// }
serpienteComeSuperheroes.printQueue()
while(!serpienteComeSuperheroes.isEmpty()){
    console.log("Escapa " + serpienteComeSuperheroes.dequeue().nombre)
}


// Pilas servía para encontrar caminos
// Colas te sirver para guardar ese camino y darlo como direccion

