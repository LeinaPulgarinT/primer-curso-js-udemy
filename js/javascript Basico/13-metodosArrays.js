//--------METODOS ARRAYS-------------

//AÑADIR elementos a un array al FINAL
let numeros = [1, 2, 3, 4];
numeros.push("text prueba"); //esto lo que hace es que agrega un elemento al final del arreglo
// console.log(numeros);

//ELIMINAR elementos a un array FINAL
numeros.pop(); //Esto lo que me hace es que me elimina el ultimo elemento del arreglo
// console.log(numeros);

//AÑADIR elementos al INICIO
let numbers = [1, 2, 3, 4, 5];
numbers.unshift(0); //unshift lo que me hace es que me agrega elementos al inicio de un arreglo.
// console.log(numbers);

//ELIMINAR elementos al INICIO
let numeritos = [0, 1, 2, 3, 4];
numeritos.shift(); //Shift lo que me hace es que me elimina numeros al inicio de un arreglo, en este caso me eliminara el numero 0.
console.log(numeritos);

/* RESUMEN:
push = añade un elemento al final del array.
pop = elimina un elemento a final del array.
unsift = añade un elemento al principio del array.
shift = elimina el primer elemento del array.
*/
