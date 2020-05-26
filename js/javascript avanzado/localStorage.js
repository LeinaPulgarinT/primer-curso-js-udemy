//------LOCAL STORAGE---------
/*
Es como un pequeño almacenamiento que tenemos en el navegador donde podemos guardar ciertos datos, para guardar datos los guardo con setItem.
--setItem recibe dos parametros: primero el nombre del elemento que queremos guardar, y segundo el elemento que vamos a guardar.
Para acceder a datos que tenga en el localStorage lo hago con getItem:
*/
// let nombre = "Leina";
// localStorage.setItem("miNombre", nombre);
/*--getItem: para poder acceder a algo que haya en el localStorage tengo que ponerle el key, el nombre con que se ha guardado en el localStorage*/
let adquirirDato = localStorage.getItem("miNombre");
console.log(adquirirDato);

/*
si depronto quiero borrar algo del localStorage lo hago .clear()
*/
localStorage.clear();
