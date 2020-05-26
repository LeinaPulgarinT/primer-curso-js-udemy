const sumar = (numero1, numero2, callback) => {
  let resultado = numero1 + numero2;
  // console.log(resultado);
  callback(resultado);
};

const porconsola = (dato) => {
  console.log(dato);
};

sumar(4, 2, (dato) => porconsola(dato * 2));

//un callback es una funcion que se ejecuta dentro de otra funcion, es decir una funcion que es pasada como parametro a otra funcion.
