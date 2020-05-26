/*ASYNC & AWAIT
async y await es otra forma de mejorar los callbacks, es mucho mejor que las promesas.
Se utliza para cuando necesitamos tener una funcion y no sabemos cuanto tiempo va demorar en retornarme un resultado y despues queremos hacer algo con ese resultado; si nosotros queremos que js espere una funcion js no lo va hacer por eso debemos darle una asincronia al lenguaje.
Entonces cuando le pongo async le estoy dando la asyncronia que el lenguaje necesita, y ese async se lo debo asignar a la funcion que necesita el dato, entonces es como si le dijera que no se me va ejecutar hasta que no obtenga ese dato, y antes del dato que necesito esperar que en el sgte ejemplo es add(), entonces le pongo el await, con esto le digo que se espere.
*/

const add = (n1, n2) => {
  return n1 + n2;
};

const byConsole = async (date) => {
  let result = await add(9, 5); //cuando le pongo await es como si le dijera: este dato de aqui puede que tarde un tiempo en llegar entonces todas las funciones que hayn interactuando con ese dato van a saber que ese dato puede tardar y lo van a esperar
  console.log(date + " " + result);
};

byConsole("El resultado es");
