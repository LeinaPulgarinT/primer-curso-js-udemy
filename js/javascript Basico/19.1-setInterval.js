/*----------SETINTERVAL---------


setInterval me da la posibilidad de que lo qu yo le diga se ejecute cada cierto tiempo,, por ejemplo le digo se me ejecute una frase en la consola a los tres segundos esntonces se me va jecutar a los tres segundos, luego pasan otros tres segundos y se me ejecuta.
lo anterior se resume en que se va estar ejecutando cada tres segundos.

NOTA:
se le pasa una funcion callback como primer parametro, y como segundo parametro le paso el tiempo en que quiero que se me ejecute lo que hay dentro del callback.
*/

setInterval(() => {
  console.log("Ejecutandose");
}, 2000);
