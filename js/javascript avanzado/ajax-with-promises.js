/*
FUNCION PARA HACER VARIAS PETICIONES AJAX Y CON PROMISES:
con ajax cuando hago peticiones asincronas lo que mas se utiliza es promesas.
*/
const askAjax = (method, destination) => {
  return new Promise((resolve, reject) => {
    let ajax = new XMLHttpRequest();
    ajax.open(method, destination);
    ajax.addEventListener("load", (e) => {
      let data = JSON.parse(e.target.responseText);
      resolve(data);
    });

    ajax.send();
  });
};

const byConsole = (date) => {
  console.log(date);
};

askAjax("GET", "https://jsonplaceholder.typicode.com/users").then((date) => {
  byConsole(date);
});
