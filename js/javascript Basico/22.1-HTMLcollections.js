//---------HTMLcollections-----
const contenedor = document.getElementById("contenedor");

//ahora voy a acceder a los elementos hijos que estan dentro del contenedor con .children:

// const hijosContenedor = contenedor.children;
// console.log(hijosContenedor);
/*supongamos que quiero acceder a la primera posicion de mis elementos(es decir a su contenido), es decir a mi h1, esto se hacer con .innerText: */
// console.log(hijosContenedor[0].innerHTML); //pero si quisiera recorreer las otras posiciones de esta forma se me haria mas codigo.

/*no se pueden recorrer las pocisiones con un forEach, o con un map, por que los html collection no tienen esos metodos tocaria convertirlo a un array para poder hacerlo, se hace de la siguiente forma:*/

/* el objeto Array en el metodo from toma como parametro lo que necesito convertir a un array */
const hijosContenedor = Array.from(contenedor.children);

// console.log(hijosContenedor); //lo que me va devolver en la consola es que ya se ha convertido en un array.

//ahora mi html convertido en un array lo puedo recorrer con lo que yo desee, en este caso lo voy a recorrer con un map:
// hijosContenedor.map((elemento) => console.log(elemento.innerHTML));

//supongamos que quiero filtrar solo uno de los elementos con filter:

const hijosFiltrados = hijosContenedor.filter(
  (elemento) => elemento.innerText === "ADIOS"
);

// console.log(hijosFiltrados[0].innerText);

//lo anterior tambien funciona para los nodeList:
// const hijosNodos = contenedor.childNodes;
// console.log(hijosNodos); //acá se me va devolver en consola una nodeList, donde cada elemento y cada espacio tienen una posicion dentro de la lista, ahora si yo lo quisiera reccorrer debo de convertirlos a un array  asi:
const hijosNodos = Array.from(contenedor.childNodes);
console.log(hijosNodos); //esto lo que va hacer es que me va devolver un array, y cada  posicion de ese arreglo tiene su propiedad innerText, entonces se podria recorrer ese arreglo y mostrar la informacion que desee:

hijosNodos.forEach((elemento) => console.log(elemento.innerText));
