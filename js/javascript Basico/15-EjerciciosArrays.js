//Pida por pantalla que quiero hacer con un array, si yo le digo crear me va añadir el elemento que yo le diga, si yo le digo borrar me va borrar el elemento que yo le diga, y si le digo listar me va mostrar todoos los elementos que yo le diga.

let usuarios = ["leina", "camilo", "luis", "monica"];
// let dato = prompt(
//   'si desea crear un elemento por favor ingrese la palabra "añadir", si va eliminar un elemento por favor ingrese la palabra "borrar", si va a listar los elementos por favor ingrese la palabra "listar" '
// );
// const operaciones = (array, dato) => {
//   if (dato === "añadir") {
//     array.push(dato);
//     console.log(array);
//   } else if (dato === "borrar") {
//     array.pop();
//     console.log(array);
//   } else if (dato === "listar") {
//     array.forEach((data) => console.log(data));
//   }
// };

// operaciones(usuarios, dato);

let respuesta = prompt("¿Qué desea hacer con el Array?");
//otra forma de naalizar el problema:
switch (respuesta) {
  case "crear":
    let respuesta2 = prompt("¿Qué desea añadir al Array?");
    usuarios.push(respuesta2);
    console.log(usuarios);
    break;
  case "borrar":
    usuarios.pop();
    console.log(usuarios);
    break;
  case "listar":
    usuarios.forEach((dato) => document.write(dato));
    break;
  default:
    alert("no has introducido un dato válido");
    break;
}
