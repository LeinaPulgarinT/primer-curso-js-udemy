let user = {
  name: "leina",
  age: 22,
  premium: true,
};

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST", //acá ponemos el metodo que va usar la peticion
  headers: { "content-type": "data/json" }, //acá etamos dando info sobre la peticion que estamos haciendo, es decir que el tipo de contenido que estamos enviando en un json
  body: user,
})
  .catch((error) => console.log(error))
  .then(() => {
    console.log("EXITO");
  });
