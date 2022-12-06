//* COCINANDO ARREGLOS 

    //* ESTA FORMA TAMBIÉN ES VALIDA YA QUE UN ARRAY "ES UN OBJETO"

    var myArray = new Array () // ESTA VACIO
    var myArray = new Array ("JAIR","JOSE","JESUA","DAVID","GERARDO")
    console.log(myArray.length)

    //* ESTA ES LA FORMA MAS COMUN Y LAS MAS USADA PARA INICIAR UN ARREGLO Y LA QUE
    //* ESTARAN USANDO CONSTANTEMENTE

    var myArray = [] // arreglo vacío, que vamos a poblar un arreglo
    var myArray = ["JAIR","JOSE","JESUA","DAVID","CARLOS","JUAN","ESTHER"]
    console.log(myArray)


    //* PODEMOS RECORRER UN ARREGLO PARA SABER SU TAMAÑO

        myArray.forEach(function(myArray){
                console.log(myArray)
        })
                console.table([
                    "JAIR","JOSE","JESUA","DAVID","CARLOS","JUAN","ESTHER"
                ])
  
                //* forEach es un bloque constructivo de los lenguajes de programación]
                //* recorrer los elemenos de una colección (arreglo)

    //* EJEMPLO 2) SUPONGAMOS QUE TENEMOS DOS ARREGLOS , QUIERO CREAR UN ARREGLO NUEVO 

      const discoUno = ["AC/DC","SCORPIONS","KISS"]
      const discoDos = ["GUNS & ROSES","THE RAMONES","BON JOVI"]
      const nuevoDisco = discoUno.concat(discoDos)
      console.log(nuevoDisco)

      //* EJEMPLO 3 ) TENEMOS UN ARREGLO PARA ESTUDIANTES, USAREMOS JOIN 


      var estudiantes = ["Andres","William","Estela","Natanael","Edwin","Erick"]
      var junto = estudiantes.join(",")
               console.log(junto)
                      //join convierte una lista en una cadena , formada por los elementos de la lista
                       // separado por comas


    //* EJEMPLO 4) USAREMOS EL MISMO ARREGLO DE ESTUDIANTES, PARA PROBAR EL MÉTODO POP 
                var ultimo = estudiantes.pop()
                console.log(estudiantes)
                // PUSH
                estudiantes.push("MIGUEL")
                console.log(estudiantes)

   //*SPLICE ( INDICE (INDEX), NUMERO DE ELEMENTOS A BORRAR, "ELEMENTO NUEVO")
   //* EN CASO DE SOLO BORRAR, SOLO METER 2 PARAMETROS, INDICE, NUMERO DE ELEMENTOS A BORRAR)
                estudiantes.splice(2,2)
                console.log(estudiantes)
                estudiantes.splice(3)//REGRESA EL NUMERO DADO EMPEZANDO POR EL INICIO


               // PASA QUE AVECES INDICAMOS QUE NO BORRE NINGUN ELEMENTO, SUELE BORRAR EL ELEMENTO
            estudiantes.splice(2,0,"MARIA","ROBERTO","KAROL G","JUANPA",["MANZANA","PERA",],2,10,3,8) // INSERTA ELEMENTOS EN EL INDICE 2

            //* METODOS SHIFT Y UNSHIFT (IGUAL QUE POP Y PUSH PERO, CON EL PRIMER ELEMENTO DE LA LISTA)

                estudiantes.unshift("PALOMA")
                console.log(estudiantes)
                var primerElemento = estudiantes.shift()
                console.log(primerElemento)
                console.log(estudiantes)

            //* REPLACE 

                var ejemploReplace = "cocodrilo"
                var remplazo = ejemploReplace.replace("c","N")
                console.log(remplazo)