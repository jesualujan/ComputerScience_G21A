//* PASOS PRA DESARROLLAR EL CÓDIGO DE UN ÁRBOL BINARIO

//* TENDREMOS DOS CLASES
    //* 1) class Node { constructor (data,left,right) }
    //* 2) class BinaryTree { constrcutor () } aquí partiremos de la raiz 


    //? construir nodos 

    class Node {
        constructor (data,left,right){
            this.data = data
            this.left = left  // nodo hijo
            this.right = right // nodo hijo 
        }
    }

    //? construir nuestro árbol, el primer nivel 0 = vacío 

    class BinaryTree {
        constructor () {
            this.root = null
        }

        //* VAMOS A TENER NUESTROS METODOS 
            //* add (agregar) -> se encarga de agregar un dato 
            //* contains (contiene) -> verificar si un nodo existe respecto a un dato

        add(data) {
            // primero debemos verificar root está vacia: this.root=null
            if(this.root === null) {
                //crear un nuevo nodo(data,null,null)
                this.root = new Node (data, null, null)
                return
            }
            // si no está vacia , creamos un apuntador ( current node ) a mi raiz 
            let currentNode = this.root

            // un ciclo mientras cada nodo sea un subarbol 
            while(true){
                // si la data de mi nuevo nodo es menor que lada data de mi nodo actual
                if(data < currentNode.data){
                    //revisar si el nodo izquierdo esta vacio
                    if(currentNode.left !== null ){
                            //mi nodo actual le asigno a la izquierda el nuevo nodo 
                            currentNode = currentNode.left
                    }else{
                        currentNode.left = new Node (data,null,null)
                        return currentNode.left
                    }
                }else{
                    // si el espacio de la derecha está vacio
                    if(currentNode.right !== null ){
                        // agregar nuevo nodo
                        currentNode = currentNode.right
                    }else{
                        currentNode.right = new Node (data,null,null)
                        return 
                    }
                }
            }
        }

        contains(data){
            // asignar a current node el head 
            let currentNode = this.root
            // mientras currentNode exista 
            while (currentNode !== null ){
                if( data === currentNode.data){
                    // devolver verdadero 
                    return true 
                }else {
                    // si mi dato es menor 
                    if(data < currentNode.data){
                        //asiganar mi apuntador a la izquierda
                        currentNode = currentNode.left

                    }// si mi dato no es menor, es mayor
                    else{
                        //asignar mi apuntador a la derecha 
                        currentNode = currentNode.right
                    }
                }
            }
                return false
        }
    }

//agregar data 

//instancias de la clase BinaryTree()
const nodo = new BinaryTree();
nodo.add(12)
nodo.add(11)
console.log(nodo)
