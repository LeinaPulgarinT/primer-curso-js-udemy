let usuarios = ["Juan", "Pepe", "Adrian", "Frank"];
let adrian = usuarios[2];
// console.log(adrian);

//---------variables con arrays-----
let username = "leina";
let userage = 22;
let premium = true;

let UserLeina = [username, userage, premium];
// console.log(UserLeina);

//-----------Arrays multidimensionales--------

let participantes = [
  ["camilo", "alonso", "cristian", "johny"],
  ["monica", "leina", "camila", "libia"],
];

// console.log(participantes);

//-----------Arrays con for------------
let usuarios = ["leina", "camila", "libia"];
// console.log(`hola ${usuarios}`);
//el ciclo siempre esta confromado por tres partes la primera el la inicializacion de la variable, la segunda es la condicion del ciclo que me va determinar hasta cuando es su ejecucion, y la tercera parte es donde declaramos de cuanto en cuanto va aumentar mi ciclo.Después de estass tres pasrtes importantes viene lo que queremos que se ejecute en el ciclo, dentro de las llaves.

for (let i = 0; i < usuarios.length; i++) {
  console.log(`Hola ${usuarios[i]}`);
}

//-----Recorrer arreglos con for of-----------
let usuarios = ["leina", "camila", "libia"];

for (usuario of usuarios) {
  console.log(usuario);
}

//--------Recorrer arreglos con forEach-------
let usuarios = ["leina", "camila", "libia"];

usuarios.forEach((dato) => console.log(`Hola ${dato}`));

//otra forma de utilizar el forEach

usuarios.forEach((dato, indice) =>
  console.log(`Indice: ${indice}, Dato: ${dato}`)
);

// otra forma de hacerlo sin arrow function
usuarios.forEach(function (dato, indice) {
  console.log(indice + dato);
});
