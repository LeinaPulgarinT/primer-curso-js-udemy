/*Lo que quiero hacer es que el cargando que hay en el elemento p desaparezca una vez hayan cargado los datos que se han pedido en la peticion */

const load_p = document.getElementById("load");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((date) => date.json())
  .then((date) => {
    load_p.style.display = "none";
    date.map((element) => {
      document.write(`${element.username} <br>`);
    });
  });
