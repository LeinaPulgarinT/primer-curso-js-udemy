//------------SLICE Y SPLICE------------

let numeros = [1, 2, 3, 4];
console.log(numeros);

numeros.splice(0, 2); //Desde la posicion 0 eliminame la posicion cero y la posición uno.

numeros.splice(2, 2); //desde la posicion 2 eliminame dos.

numeros.splice(2, 4); //desde la posicion dos eliminame lo que hay en la posicion dos y en la posicion 3.

//lo anterior son diferentes formas de hacer lo mismo.
let numeros = [6, 2, 3, 4];
numeros.splice(0, 3, 7); //acá lo que estoy diciendo es que desde la posicion cero, se me elimine 3 y me agregue 7, lo que me queda es un arrayeglo de [7, 4], me elimina el 6,2,3 y me deja el 4, y luego me agrega el 7 al principio. Otro ejemplo:
numeros.splice(1, 2, 9); //Acá lo que estoy haciendo es que desde la posicion 1, me elimine dos elementos y me agregue 9, entonces tomando como referencia el arreglo numeros, se me van a borrar los elementos 2 y 3, y me va quedar un arreglo asi: [6,9,4].
/*
NOTA: 
siempre que utilice splice de las dos formas anteriores la consola me va devolver los elementos que se me eliminan.

*/

//----------Agregar con spice------------
let numeros = [1, 2, 3, 4];
console.log(numeros);

// numeros.splice(1, 0, "Hola");

//agragar un elemento en la mitad de un arreglo.
numeros.splice(numeros.length / 2, 0, "Hola soy un elemento nuevo");
numeros.push(5);

//------SLICE-----------
//sirve para sacar una porción del arreglo.
let numerosHastaEl3 = numeros.slice(0, 2); //acá le estoy diciendo que del arreglo numeros me saque desde la posicion 0 me saque dos elementos, si yo le digo tres me saca tres elementos y asi sucesivamente.

/*
RESUMEN:
SLICE: es para sacar una porcion, o  elementos de un array.
SPLICE: es para eliminar y poner elementos de un array.

*/
