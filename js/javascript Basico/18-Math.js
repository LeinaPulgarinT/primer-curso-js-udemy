//-------------MATH-----------------
/*
EJERCICIO: yo quiero que cada vez que recargo la pantalla, me salga un valor aleatorio de un array
*/

let nombres = ["Rompis", "Tully", "Toby"];

// el math.random lo que me hace es que me devuelve son decimales:
let numeroAleatorio = Math.random() * 3;
console.log(numeroAleatorio);

//Para quitarle los decimales lo hago con:
let numeroSinDecimal = Math.floor(numeroAleatorio);
console.log(numeroSinDecimal);

console.log(nombres[numeroSinDecimal]); //Acá lo que estoy haciendo es decirle al arreglo nombres que me acceda a la posicion que me genera el math.random.

//otra forma de generar el numero aleatorio:
let resultado = [Math.floor(Math.random() * 3)];
console.log(nombres[Math.floor(Math.random() * 3)]);
