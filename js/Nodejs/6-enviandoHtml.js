/*Cada vez que hacemos un cambio debemos parar el servidor y volverlo a arrancar para mirar os cambios que se hicieron en el servidor, eso lo soluciona un modulo que se llama nodemon, el recarga el servidor por nosotros, las instalaciones se realizan con npm:
npm install nodemon,
para ejecutar nodemon hacemos lo siguiente:
npx nodemon 5-express.js(despues de la palabra clave nodemon va el archivo donde tenemos el servidor, en este caso tengo un servidor creado en 5-express.js).
*/

/*--------ENVIANDO HTML-------
NOTA:
aparte de enviar mensajes tambien podemos enviar html a nuestro servidor*/
const express = require("express");
const server = express();
server.set("port", "3000");
server.get("/", (req, res) => {
  res.send("Hola este es mi servidor");
});

server.get("/contacto", (req, res) => {
  res.send("Hola estas en contacto");
});

server.get("/creador/hola", (req, res) => {
  res.send("La creadora es leina");
});

server.listen(server.get("port"), () => {
  console.log(
    "Servidor correctamente arrancado  en el puerto " + server.get("port")
  );
});
