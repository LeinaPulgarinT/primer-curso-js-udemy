//-----SABER SI UN ELEMENTO TIENE NODOS HIJOS O NO--------
//Eso lo hacemos con el metodo .hasChildNodes(), entonces eso nos devuelve true o false dependiendo si mi contenedor tiene nodos hijos o no.

const nodosSiHay = document.getElementById("contenedor");
console.log(nodosSiHay.hasChildNodes());

//si yo por ejemplo elimino los hijos que hay en el contendor y dejo algun espacio me va seguir considerando ese espacio como si fuera un nodo. Para que no me aprezca el true, debo de quitar los espacios y dejar la etiqueta de cierre y la etiqueta de apertura juntas.

//--------firstChild---------
/*lo que me devuelve es el primer nodo*/

// const contenedor = document.getElementById("contenedor");
// console.log(contenedor.firstChild);

/*Esto es para sacar el primer elemento de mi nodo: se hace con firstElementChild
 */

//--------firstElementChild-------------
// const contendor = document.getElementById("contenedor");
// console.log(contendor.firstElementChild);
//de la manera anterior consigo que saque el primer elemento del nodo que seria el h1.
/*
en el primer console.log me devolvia text, por que habia un espacio, entonces debo de tener en cuenta de que si hay espacios me lo va tomar como un nodo de texto que esta vacio.Entonces cuando tengo espacios y quiero sacar el primer elemento debo de hacerlo con fistElementChild, firstChild no me serviria, por que me toma espacios como nodos de texto.
*/

//--------lastChild---------
/*
lo que me hace es que me devuelve el ultimo nodo, que es un espacio y me lo toma como nodo de texto
*/

// const contendor = document.getElementById("contenedor");
// console.log(contenedor.lastChild);

//--------lastElementChild----------
/*
Esto lo que me hace es que me devuelve el ultimo eleemnto del nodo.
*/
const contendor = document.getElementById("contenedor");
console.log(contenedor.lastElementChild);
