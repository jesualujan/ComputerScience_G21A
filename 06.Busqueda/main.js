
function buscarLinealmente(arreglo, elemento){
    for (let i = 0; i < arreglo.length; i++) {
        console.groupCollapsed("Iteracion "+ i)
        console.log("Comparando: " + elemento + " == " + arreglo[i] + " da " + (elemento == arreglo[i]))
        if(elemento == arreglo[i]){ // Nos dice si encontro lo que buscamos
            console.log("Encontró en posicion" + i + ". Se tardó "+ (i+1) + " iteraciones")
            console.log("Regresa "+i)
            console.groupEnd()
            return i
        }
        console.groupEnd()
    }
    return -1
}

function buscarDeFormaBinaria(arreglo, elemento){

    arreglo.sort((a,b)=>{return a-b})

    let min = 0
    let max = arreglo.length-1 // Posicion maxima

    let mitad

    let iteracion = 0


    while(min <= max){ // min != max
        iteracion++

        mitad = Math.floor( (min + max)/2 )

        if(elemento == arreglo[mitad]){
            console.log("La busqueda binaria tardó " + iteracion + " iteraciones y lo encontró en " + mitad)
            return mitad
        }else if(elemento > arreglo[mitad]){
            // Tomaras el lado derecho (indices mayores)
            min = mitad + 1
        }else{
            // Tomaras el lado izquierdo (indices menores)
            max = mitad - 1
        }
    }
    console.log("No encontro")
    return -1

}

let numeros = [2,4,5,7,8,10,24,25,26,28,30,40,62]

let numeroABuscar = 2

buscarLinealmente(numeros, numeroABuscar)

buscarDeFormaBinaria(numeros, numeroABuscar)

let numerosDesordenados = [5,7,2,9,10,500,12,3,-10]

buscarLinealmente(numerosDesordenados, 9)

//numerosDesordenados.sort((a,b)=>{return a-b})

buscarDeFormaBinaria(numerosDesordenados, 3)
