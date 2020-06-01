/*----HTTP PARA LA CREACION DE SERVIDORES-----
http es un modulo integrado en node que nos permite crear servidores utilizando js, lo primero que debo hacer es decir que requiero de ese modulo:
*/
// const http = require("http"); //esto me devuelve un objeto que tiene un metodo integrado llamado createServer(), este metodo recibe una funcion callback, que toma dos parametros, esos dos parametros son objetos, obejtos que vamos a utlizar para la peticion y para la respuesta:
// http
//   .createServer((req, res) => {
//     //aquí lo primero que debemos hacer es indicarle al servidor que codigo de tipo de respuesta va devolver, lo hago con el metodo writeHead, este metodo toma dos parametros: el codigo de respuesta que va devolver y como segundo parametro le paso un json con el cual le voy a indicar el tipo de contenido con que va trabajar mi servidor, en este caso mi servidor va trabajar con contenido html, y de esta forma preparo a mi servidor para que trabaje con html:
//     res.writeHead(200, { "content-type": "text/html" });

//     //con .end envio contenido:
//     res.end(`<h1>Hola mundo, este es mi servidor :)</h1>`);
//     //tambien debo de indicarle al servidor por que  puerto va escuchar eso se hace con .listen
//   })
//   .listen(8000);

/*---------PASOS PARA CREAR UN SERVIDOR---------
1).Requiero el modulo http y lo guardo en una constante
2).con createServer creo mi servidor, especificandole (con writeHead) el codigo de respuesta y el tipo de contenido con el que va trabajar, y también debo de enviar la info con .end, dentro de los parentesis de este metodo ingreso la info que le quiero enviar al servidor para que la escuche.
3)Finalmente con .listen le digo a mi servidor en que puerto va escuchar.
NOTA: cuando vaya a parar el servidor lo hago con control+c
*/
//tambien podemos controlar que suceda una cosa u la otra, en este caso lo vamos a hacer con el codigo de respuesta, voy a crear un nuevo servidor para hacerlo:
const myServer = require("http");
myServer
  .createServer((req, res) => {
    res.writeHead(500, { "content-type": "text/html" });
    if (res.statusCode === 200) {
      res.end(`<p>Hola! este es mi nuevo servidor</p>`);
    } else if (res.statusCode === 500) {
      res.end(`<p>Error de Servidor!`);
    }
  })
  .listen(8000);
