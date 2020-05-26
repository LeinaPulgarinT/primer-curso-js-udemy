/*QUE ES UN MODULO DE NODE JS
es una porcion de codigo para realizar algo concreto, que ya viene preparada para que nosotros utlicemos esas funcionalidades.
En el siguiente ejemplo vamos a utilizar el modulo os. Para hacer referencia a un modulo, lo debemos guardar a una constante:
el nombre de la variable puede ser cualquiera, pero el de que esta entre parentesis es el modulo os*/

const os = require("os");
//En esa constante os ya tengo todos los metodos que le pertenecen al modulo os

//voy a utilizar el metodo cpus:
let cpus = os.cpus();
// console.log(cpus);

//ahora voy a utilizar el modulo de arquitectura:
let arch = os.arch();
console.log(arch);
