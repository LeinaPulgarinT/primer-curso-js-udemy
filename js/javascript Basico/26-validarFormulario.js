const formulario = document.getElementById("myForm");
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
caracteres = ["#", "$", "%", "&", "/", "?"];

formulario.addEventListener("submit", (e) => {
  //   console.log("SUBMIT DONE!");
  //Lo que me hace esl preventDefault es que si hay eventos predeterminados no se me van a ejecutar
  e.preventDefault();
  //   console.log(nombre.value);
  //   console.log(edad.value);
  //   console.log(`El nombre es ${nombre.value}
  // La edad es ${edad.value}`);

  //darle condicinales a un campo
  //   console.log(nombre.value.length);
  //acá en el codicional si la longitud del string es mayor a 7 se va poner rojo, si no se va poner verde.
  //   if (nombre.value.length > 7) {
  //     nombre.style.color = "red";
  //   } else {
  //     nombre.style.color = "green";
  //   }

  //en el este condicional si la longitud del string es mayor a 7 entonces el campo se me va quedar vacio. También podria hacer que si la longitud del string es mayor que 7 entonces que me cambie el placecholder, enfin se pueden hacer de forma muy dinamica.
  if (nombre.value.length > 7) {
    nombre.value = "";
    /* ENSAYO:
    const inputName = document.getElementById("nombre");
    inputName.getAttribute(("placeholder" = "Introduce algo que te guste"));
    const inputName = document.querySelectorAll("input");
    console.log(
      inputName[0].setAttribute("placeholder", "ingresa algo que te guste")
    );*/
  }
});

nombre.addEventListener("keydown", (e) => {
  caracteres.map((elemento) => {
    if (e.key === elemento) {
      alert(`No se puede incluir ${elemento}`);
    }
  });
});
