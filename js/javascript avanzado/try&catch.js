const sum = (n1, n2) => {
  return n1 + n2;
};

//try & catch sirve para evaluar error en una porcion de codigo(para saber si hay algun error), decidir que va mandar(throw) cunado hay erro y luego capturarlo con el catch.

try {
  let resultSum = sum(12, 10);
  if (resultSum === 20) {
    console.log(resultSum);
  } else {
    throw "La suma no se realizó correctamente"; //esto es el error que recibe el catch
  }
} catch (error) {
  console.log(error);
}
