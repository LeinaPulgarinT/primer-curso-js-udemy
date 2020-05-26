//yo puedo llamar a mi varible como quiera, en este caso la llame ajax
//----------PASOS PARA HACER UNA PETICION AJAX--------------

//primero creo uaa instancia de el objeto XMLHttpResquest con la palabra reservada new
let ajax = new XMLHttpRequest();
//hago una solicitud de tipo get
ajax.open("GET", "https://jsonplaceholder.typicode.com/users");

//escucho el evento load
ajax.addEventListener("load", (e) => {
  let date = e.target.responseText;
  let dateJson = JSON.parse(date);
  dateJson.map((element) => {
    console.log(`El nombre de este usuario es ${element.name}`);
  });

  //   console.log(JSON.parse(e.target.responseText)[1].name);
});

//por ultimo se envía la solicitud
ajax.send();

//----QUE ES UNA VARIABLE--------
//en como un contenedor en el que se gurda informacion
