//----------CREAR ELEMENTOS HTML DESDE JAVASCRIPT-----
//createElement me sirve para crear elementos nuevos.
const parrafo = document.createElement("p");
console.log(parrafo);

//si por ejemplo yo quisiera que ese elemento quedara contenido en otro, por ejemplo en el contenedor que hay en el html, lo debo hacer con un metodo appendChild(); y a ese metodo le debo pasar como parametro el elemento que le quiero añadir.
const myContenedor = document.getElementById("contenedor");

myContenedor.appendChild(parrafo);

//-----COMO DARLE CONTENIDO A UN ELEMENTO--
//eso lo hago con el metodo .textContent

// parrafo.textContent = "<span>Hola Rompis</span>";

/*Si por ejemplo yo quisiera poner un aetiqueta dentro de la etiqueta parrafo, con textContent me tomaría la etiqueta como texto, para que eso no suceda puedo mejor utilizar innerHTML, y asi si me lo coje como html*/
parrafo.innerHTML = "<span>Hola Rompis</span>";
//entonces utilizo textContent solo cuando le quiero dar texto, y debo utilizar innerHTMl cuando le quiero dar texto y aguna etiqueta.

//----CAMBIAR LA ETIQUETA------
const myh1 = myContenedor.querySelector("#titulo");
myh1.outerHTML = "<p></p>";

//----DAR ESTILOS CON JS----------
//de la siguiente forma puedo acceder a la propiedad css que desee.
parrafo.style.color = "red";
parrafo.style.fontSize = "40px";

/*
--createElement sirve para crear un elemento nuevo.
--appendChild sirve para agregar un elemento dentro de otro.
--textContent sirve para agregar contenido a un elemento
--innerHTMl sirve no solo para agregar contenido sino tambien para agregar etiquetas a un elemento como por ejemplo un span.
--outerHTMl sirve para cambiar la etiqueta.
*/
