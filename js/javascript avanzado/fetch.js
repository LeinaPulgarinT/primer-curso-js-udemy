/*---------------FETCH-------------
es una manera de hacer peticiones ajax de manera mas sencilla. La funcion fetch recibe una promesa, internamente en la que nos resuelve esa peticion; despues de que se resuelven las promesas hay un .then que recibe un callaback, y ese callback tiene como parametro un dato, que ese dato es lo que resuelve y retorna la promesa (ejemplo: reolve(dato))
*/

fetch("https://jsonplaceholder.typicode.com/users")
  //utilizo el catch para en caso de que haya un error, lo capture.
  .catch((error) => {
    console.log(error);
  })
  //el metodo .json lo que hace es extraer los datos json de esa peticion para que podamos obtener la informacion.Una forma de acceder a lo que me retorna las promesas es con .then
  .then((date) => date.json()) //este metodo tambien tiene otra promesa y por eso para acceder a esa respuesta tengo que utilizar otra vez .then:
  .then((date) => {
    console.log(date);
  });
