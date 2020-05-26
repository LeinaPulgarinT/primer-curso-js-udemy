/*
EJERCICIO:
cuando yo habra la pagina me va preguntar si yo quiero crear un elemento, si yo le digo aceptar, me va preguntar que elemento quiero crear, que contenido va tener dicho elemento, si quiero darle algun atributo y el valor del atributo y tambien me va pregunat que color quiero para el fondo del elemento, y despues lo va meter dentro de contenedor
*/
let elemento;
let contenido;
let atributo;
let valorAtributo;
let color;
//Acá pregunto si el usuario quiere crear un elemento
let respuesta = confirm("¿Quiéres crear un elemento?");
if (respuesta === true) {
  elemento = prompt("¿Qué elemento quieres crear?");

  //le pregunto que elemento quiere crear
  let myElemento = document.createElement(`${elemento}`);
  console.log(myElemento);

  //le pregunto que contenido va tener el elemento
  contenido = prompt("¿Qué contenido va tener el elemento?");
  myElemento.textContent = `${contenido}`;
  //lo anterior tambien podria ser asi: myElemento.innerText=contenido

  //le pregunto si desea crear un atributo
  let respuesta2 = confirm("¿le vas a poner un atributo?");
  if (respuesta2 === true) {
    //escriba el atributo
    let atributo = prompt("Escribe el atributo que le vas a poner");
    valorAtributo = prompt("Escribe el valor del atributo");
    //el  valor del atributo
    myElemento.setAttribute(atributo, valorAtributo);
  }
  color = prompt("¿Qué color quieres que tenga de fondo el elemento?");
  myElemento.style.background = `${color}`;
  myContenedor = document.getElementById("contenedor");
  myContenedor.appendChild(myElemento);
}
