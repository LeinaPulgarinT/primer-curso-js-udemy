//---------SELECCIONAR POR ID-------
const mih1 = document.getElementById("miElemento");
console.log(mih1);

//si se necesita guardar informacion en una variable y se puede gusradar en una costante es mejor hacerlo en una constante por que esto favorece el rendimiento.

//------SELECTOR DE CLASE-------
//Acá lo que me devuelve es todos los elementos que tienen como calse myElement
const myh2 = document.getElementsByClassName("myElement");
console.log(myh2);

/*
NOTA: las clases se deben utilizar es para css, los id, son mejores para js
*/

//--------SELECTOR POR ETIQUETA--------
// el getElementBYTagName lo que me devuelve en este ejemplo son todos los h3 (toda la coleccion2)que hayan en mi html.
const etiquetas = document.getElementsByTagName("h3");
console.log(etiquetas);

//---------SELECTOR QUERY----------
/*
con el query selector puedo seleccionar por clase, por id, y por etiqueta
*/
//Acceder por id:
const myQuery = document.querySelector("#rompis");
console.log(myQuery);

//Acceder por clase:
const myclass = document.querySelector(".myElement");
console.log(myclass);

//Acceder por etiqueta: en mi html tengo dos estiquetas h3, pero con querySelector solo me va devolver el primer elemento que tenga la etiqueta h3, para que me traiga todos los elementos que cumplan con esa condicion tiene que ser con querySelectorAll.
const myEtiqueta = document.querySelector("h3");

console.log(myEtiqueta);

//---------SELECTOR querySelectorAll--------
const myestiquetas = document.querySelectorAll("h3");
console.log(myestiquetas);
//en este caso me va devolver una lista de nodos, de h3

//-------QUERY SELECTOR COMO PADRE----------
/*
NOTA: el querySelector se pueden aplicar a un elemento padre en concreto
*/

const contenedor = document.getElementById("contenedor");
// const myh1 = contenedor.querySelector("h1");
const myh1 = contenedor.querySelectorAll("h1");
console.log(myh1);
