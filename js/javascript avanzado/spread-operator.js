/*si yo quisiera hacer una copia de ese array y solo modificar una posicion de la copia, de la siguiente forma, si me va modificar la copia, pero no solo la copia si no también el array original, y eso no lo quiero hacer*/

// let numbers = [1, 2, 3, 4, 5];
// let copyNumbers = numbers;
// copyNumbers[0] = 12;
// console.log(numbers);

//-----FORMA CORECTA DE HACERLO------
// let numbers = [1, 2, 3, 4, 5];

//acá le estoy diciendo que me haga una propagación del array
// let copyNumbers = [...numbers];
// copyNumbers[0] = 12;
// console.log(numbers);
//de la forma anterior no se me modifica el array original.

//--------CONCATENAR DOS ARRAYS SIN UTILIZAR CONCAT--------
let numbers = [1, 2, 3, 4, 5];
let numbersTwo = [6, 7, 8, 9, 10];
let numbersFull = [...numbers, ...numbersTwo];

//también si quiero puedo ingresarle valores en medio:
numbersFull = [...numbers, "separador", ...numbersTwo];

//----MOSTRAR LOS DATOS EN LA CONSOLA SIN RECORRER EL ARRAY----------
console.log([...numbers]); //si lo pongo asi me va mostrar el array

//pero si lo pongo asi me va mostar solo lo que hay dentro del array, sin tener que recorrerlo:
console.log(...numbers);

//---------SPREAD OPERATOR WITH OBJECT--------
let userObject = {
  name: "Soranlly",
  age: 22,
  premium: true,
};

//acá voy a hacer una copia de mi objeto original y le voy a modificar la propiedad name, pero al igual que paso en los arrays no solo se me va modificar la copia del array sino tambien el array original
// let userObjectCopy = userObject;
// userObjectCopy.name = "Leina";

//lo anterior lo voy a solucionar utilizando spread operator:
let userObjectCopy = { ...userObject };
userObjectCopy.name = "Leina";
//de esta forma solucioné el problema.

userTwo = {
  name: "Andrés",
  age: 22,
  premium: false,
};

/*Nota:
el spread operator en los objetos al parecer solo funciona para hacer copias del objeto, por que si quiero concatenarlo o acceder a sus valores sin recorrerlo, no funciona.*/
// let users = { ...userTwo, ...userObject };
// console.log(...userObject);

//-----------¿QUE ES UN DCN?-----------
//un cdn es que, en vez de desgargar una libreria completa lo unico que hago es que pongo el enlace y asi puedo accder a ella.
