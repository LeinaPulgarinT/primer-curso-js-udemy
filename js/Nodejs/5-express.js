/*---------EXPRESSS----------
express nos permite crear servidores como lo haciamos con http, pero con mayor organizacion y con un codigo mas limpio y legible y mas facil.Express es un modulo que no viene integrado en Node, por eso hay que instalarlo mediante la terminal.
Para instalar un modulo debo de hacer:
npm install express (ó npm i express).
Vamos a crear un servidor en express:
*/

//1.Primero debo de requerir express:
const express = require("express");

//creo una constante donde voy a guardar el server, cuando ejecutamos la funcion express(), esto ya nos devuelve el servidor:
const server = express();

//esto es para cuando mi app es muy grande y voy a cambiar el puerto de mi servidor, entonces para no ir manualmente y cambiarlo en todas las partes donde esta lo hago asi:
server.set("port", "3000");

//2.de la siguiente forma puedo hacer cuantas rutas desee:
server.get("/", (req, res) => {
  res.send("Hola este es mi servidor");
});

server.get("/contacto", (req, res) => {
  res.send("Hola estas en contacto");
});

server.get("/creador/hola", (req, res) => {
  res.send("La creadora es leina");
});

//3.luego hay que especificarle al servidor por el puerto en que va escuchar:
server.listen(server.get("port"), () => {
  console.log(
    "Servidor correctamente arrancado  en el puerto " + server.get("port")
  );
}); //siempre que pongo server.get('port') estoy haciendo referencia al puerto que estoy escuchando, es como si fuera una variable donde estoy guardando esa informacion.

/*si pongo a correr el servidor que se creo, me va aparecer Cannot GET /, ese cannot Get sale por que no se le ha configurado ninguna ruta.
¿Que son las rutas?
cuando accedemos a una página de internet, le estamos haciendo una peticion de tipo get al servidor de que pagina es la que nos tiene que devolver, y cuando cambiamos entre pagina y pagina, simplemente le estamos diciendo al servidor que nos de una pagina u otra, todo eso hay que configurarlo, como va reaccionar el servidor, cuando me pidan algo.
server.get("/", (req, res) => {
  res.send("Hola este es mi servidor");
}), el server.get toma dos parametros la ruta de mi servidor y que se va mostrar en ese servidor.
si le indico la:('/'), eso es a la parte principal de mi servidor, tambien recibe el req y el res, entonces si me hacen una peticion get a la raiz de mi sitio, puedo hacer un res.send y entre los parentesis lo que quiero que me escuche el servidor.

En resumen:
lo anterior quiere decir que cuando alguien haga una peticion get a la raiz de mi servidor que se representa con '/', entonces me va aparecer un mensaje en el docuemnto un mensaje

por ejemplo voy a crear otra ruta /contacto:
server.get("/contacto", (res, req) => {
  res.send("Hola estas en contacto");
});


Nota:
si por ejemplo tengo una aplicacion muy grande y tengo que utilizar el numero del puerto en mas sitios, si en un momento dado tengo que cambiar el puerto, tendria que cambiarlo en todos los sitios donde estoy poniendo el numero del servidor, para solucionar esto simplemente hago lo siguiente, antes de las rutas:
server.set('port', '3000'),
luego en donde esta mi metodo .listen hago esto:
server.listen(server.get('port'), ()=>{
  console.log('Servidor correctamente arrancado')
})
*/
