//----------CONCAT-----------

let chicas = ["Leina", "camila", "Libia"];
let chicos = ["camilo", "johny", "cristian", "Alonso"];

let chicosAndChicas = chicas.concat(chicos);
// console.log(chicosAndChicas);

//---------BUSCAR EN ARRAYS CON INDEXOF-------
chicos.indexOf("camilo");

chicos.indexOf("Alonso");

//si depronto estamos buscando un objeto y no se encuentra dentro del arreglo, entonces me va devolver un (-1)

const arrayCheck = (array, dato) => {
  if (array.indexOf(dato) === -1) {
    console.log("No esta presente");
  } else {
    console.log("si esta presente");
  }
};

arrayCheck(chicos, "johny");

/*
CONCAT: lo que me hace es que me concatena o une dos arreglos.
INDEXOF:  lo que me hace es que me busca en un arreglo un elemento en especifico que necesite y lo que me devuelve es la posicion en que se encuentra el elemento.

*/
