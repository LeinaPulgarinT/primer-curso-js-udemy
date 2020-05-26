/*
json es un sistema de guardado de informacion  y lo usan mucho los servidores para mandar información.
la diferencia de entre los objetos de js y los json es que los json, las propiedades van entre comillas, y los objetos en js van sin comillas; los json se separan por comas igual que llos objetos de js.
*/

let user = {
  nombre: "Leina",
  edad: 22,
};
// console.log(user);

/*
json tambien se puede convertir a un string, esto se hace con JSON.stringify, recibe un parametro que es el objeto json que quiero pasar a String, el string aparece entre llaves, pero es un string, no es un objeto.
*/
let userString = JSON.stringify(user);
// console.log(typeof userString);

/*
También si deseo puedo convertir un string a un objeto, eso lo hago con JSON.parse(), esto recibbe un parametro que es el string que queremos pasar a objeto.
*/

let jsonUser = JSON.parse(userString);
// console.log(jsonUser);
