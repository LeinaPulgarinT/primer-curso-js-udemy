//---------MAP----------
//Lo que me hace el map es que me forma un nuevo array con la operacion

let numeros = [1, 2, 3, 4];
let numerosPorDos = numeros.map((dato) => dato * 2);
// console.log(numerosPorDos);

//-------------FILTER----------
//filter lo que me hace es que me filtra los elementos que cumplen con alguna condicion.

let numerosFiltrados = numeros.filter((dato) => dato > 2);
// console.log(numerosFiltrados);

//-----------REDUCE------------------
//Reduce lo que me hace es que me recorre un arraya y me suma los elemnetos de ese arreglo.
let numerosSumados = numeros.reduce((dato1, dato2) => dato1 + dato2);
// console.log(numerosSumados);

numerosFiltrados.forEach((data) => console.log(data));
