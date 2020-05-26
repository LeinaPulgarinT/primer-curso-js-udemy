//---------------PROMESAS----------
/*
las promesas son una mejora sobre los callbacks, se mejora la funcionalidad de estos pero el objetivo sigue siendo el mismo que el de porque existian los callbacks
*/

//repaso de callbacks:

// const sumar = (numero1, numero2, callback) => {
//   let sumita = numero1 + numero2;
//   callback(sumita);
// };

// sumar(3, 6, (dato) => {
//   console.log(dato * 2);
// });

/*
el problema de los callbacks es que si necesito meter un callback dentro de otro y asu vez otro dentro de ese callback y asi sucesivamente eso se me va ir convirtiendo en una piramide y se me va hacer dificil de leer, eso es conocido como el infierno de los callbacks, entonces las promesas nos permiten un codigo mas limpio
*/

//------------PROMESAS----------
//en las promesas hay que instanciar un objeto llamado Promise y lo instanciamos con la parabla reservada new, resolve significa que resulve y reject significa que rechaza. Lo que hace la siguiente promesa es que la funcion que este trabajando con ese resultado no se va ejecutar hasta que se resuelvan los callbacks. Con las promesas cuando llame mi funcion ya no tengo que pasar un tercer parametro como hacia con los callbacks
const sumar = (num1, num2) => {
  return new Promise((resolve, reject) => {
    let resultado = num1 + num2;
    setTimeout(() => {
      resolve(resultado);
    }, 4000);
  });
};

//.then lo que recibe es una funcion de callback como parametro y esta funcion callback recibe un dato como parametro que vendria siendo el resolve que se esta ejecutando in the function sumar
// then((dato) => {
//   console.log(dato);
// });

//lo que voy a hacer es similar a lo que se hizo con el .then en las lineas anteriores:
const porConsola = (dato) => {
  console.log(dato);
};
sumar(5, 5).then((dato) => {
  porConsola(dato);
});

//NOTA:
//se pueden encadenar varios .then, e incluso in the function porConsola se puede instanciar otro object Promise para luego encadenar un .then
