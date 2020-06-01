const suma = (n1, n2) => {
  console.log(n1 + n2);
};
const resta = (n1, n2) => {
  console.log(n1 - n2);
};
const multiplicacion = (n1, n2) => {
  console.log(n1 * n2);
};
const division = (n1, n2) => {
  console.log(n1 / n2);
};
let cuentas = {
  suma,
  resta,
  multiplicacion,
  division,
};

//debo de exportar mi modulo para poderlo utilizar en otro documento.
module.exports = cuentas;
