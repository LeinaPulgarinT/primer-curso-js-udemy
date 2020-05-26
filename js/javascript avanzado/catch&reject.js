const Add = (num1, num2) => {
  return new Promise((resolve, reject) => {
    let result = num1 + num2;
    if (num1 > 100) {
      //en el reject yo puedo hacer que me devuelva algo cuando la promesa es rechazada
      reject(`Hubo un problema, numero demasiado grande`);
    } else {
      resolve(result);
    }
  });
};

Add(150, 40)
  .then((dato) => console.log(dato))
  .catch((rejection) => {
    console.log(rejection);
  });
