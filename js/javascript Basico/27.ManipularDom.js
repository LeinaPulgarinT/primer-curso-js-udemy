const contenedor = document.getElementById("contenedor");
const parrafo1 = contenedor.querySelector("#parrafo1");
const parrafo2 = document.createElement("p");
parrafo2.innerText = "Nuevo parrafo";

//---------------INSERT BEFORE--------------------
// voy a hacer un insert before, esto se hace sobre mi elemento contenedor, el before recibe dos parametros el primero es el nuevo elemento que voy a insertar, el segundo es el elemento que va estar despues del que estoy insertando.
// contenedor.insertBefore(parrafo2, parrafo1);

//-------------REEMPLAZAR HIJOS-------------------
//Reemplazo de un elemento hijo esto se hace con replaceChild, toma dos parametros el primero es el elemento que va reemplazar al elemento existente:
// contenedor.replaceChild(parrafo2, parrafo1);

//---------------CLONE------------
// const copia = contenedor.cloneNode(parrafo1);
// copia.style.color = "red";
// contenedor.insertBefore(copia, parrafo1);
// console.log(copia);

//--------------ELIMINAR CON REMOVE---------------
contenedor.removeChild(parrafo1);

//--------------DOCUMENT FRAGMENT-----------------
const usersdiv = document.getElementById("usuarios");
const usuarios = ["Leina", "Libia", "Camila", "Rompis"];
//Esto esta consumiendo muchos recursos, mas abajo se hace de otra forma con document frangement:
// usuarios.map((elemento) => {
//   let p = document.createElement("p");
//   p.innerText = elemento;
//   usersdiv.appendChild(p);
// });

//NOTA: Em js la operacion  que mas recursos y memoria consume es la escritura del DOM.
//-----------FRAGMENT--------
usuarios.map((elemento) => {
  let p = document.createElement("p");
  p.innerText = elemento;
  //lo que voy a hacer para optimizar el codigo anterior es que voy a crear un fragmento y cada elemento p lo voy a ir almacenando en ese fragmento, y luego le hago un appendChild a ese fragmento en el container, esto es mucho mas optimo que ir haciendo un appenChild a cada parrafo individual, y estalos escribiendo en el DOM ya que esto consume muchos recursos.Ese fragmento es como una especie de caja donde podemos guardar cosas
  let fragmento = document.createDocumentFragment();
  fragmento.appendChild(p);

  //acá es donde escribe en el DOM
  usersdiv.appendChild(fragmento);
});
