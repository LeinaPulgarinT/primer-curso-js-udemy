/*---------REST OPERATOR-----------
sirve para cuando tengo una funcion y en un inicio no se cuantos parametros voy a necesitar, puede que unas veces necesite 30 y otras veces 80. se utiliza asi: en dnde estan los parametros de la funcion, pongo ... (tres puntos) y luego de esto pongo el nombre de donde se me va a gurdar todos los datos que le pase, eso va ser un array:

*/

// const listFruits = (...fruits) => {
//   console.log(fruits);
// };

// listFruits("manzana", "mango", "fresa", "uva", "mandarina", "marañón");

//En conclusion el rest operator lo que me hace es que me crea un array con todos los parametros que yo le pase.

/*----------OTRA FORMA DE UTILIZARLO--------
le puedo pasar antes del rest operator, parametros fijos como yo desee, y tambien como en el ejemplo anterior se le pueden pasar frutas como desee*/
const listFruits = (name, supermarket, ...fruits) => {
  console.log(`El encargado es ${name},
                el supermercado es ${supermarket},
                las frutas son ${fruits}
                
                
    `);
};

listFruits("leina", "the bean", "apple", "strawberry", "lemon");
