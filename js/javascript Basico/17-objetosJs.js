//-----------OBJETOS-----------
//un objeto esta definido por atributos y metodos.
/*

ATRIBUTOS:
-son propiedades de los objetos que nos dan informacion sobre el, por ejemplo atributos serian: nombre, email, telefono.
-lo atributos son infromacion acerca de ese objeto.

METODOS:
serian las cosas que ese objeto puede hacer.
por ejemplo: Un usuario puede registrarse, comprar un curso
*/

//-------DEFINIENDO UN OBJETO----------
//creando un objeto:

let usuario = {
  nombre: "Leina",
  correo: "leinatamayo@gmail.com",
  contraseña: "leina12345",
  premium: true,
  mostrar: () => {
    console.log(
      `El nombre es: ${usuario.nombre} y su contraseña es: ${usuario.contraseña}`
    );
  },
};

// console.log(usuario.mostrar());
console.log(`el nombre del usuario es: ${usuario.nombre}
y su estado es: ${usuario.premium}`);

//---------RECORRIENDO UN OBJETO----------

for (propiedad in usuario) {
  console.log(propiedad + " ");
}

//si quiero que me lo devuelva como un array, es decir que esto me convierte objetos en arreglos:
console.log(Object.keys(usuario));
