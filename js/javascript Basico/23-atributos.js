//-----accediendo a tributos desde js-----
// const mih1 = document.getElementById("mih1");
// console.log(mih1.getAttribute("class")); // esto es para acceder al atributo clase, si quiero acceder al atributo id, es solo cambiarlo:

// console.log(mih1.getAttribute("id"));

// // //desde js se pueden crear atributos:
// const mih1 = document.getElementById("mih1");
// const newatributo = mih1.setAttribute("class", "tituloPrincipal");

// console.log(mih1);

//----------OTRA FORMA DE DARLE CLASES-----
// const mih1 = document.getElementById("mih1");
// mih1.className = "miClase";
// console.log(mih1);
//lo anterior serviria para poner un condicional que si sucede algo, mi clase cambie y quede con otros estilos.

//-------CREANDO VARIAS CLASES-------
const mih1 = document.getElementById("mih1");
mih1.classList = "miClase clase2 clase3";
console.log(mih1);

/*
RESUMEN:
--getAtribute es para buscar atributos y 
--setAtribute es para crearlos.
--classList es para crear varias clases
*/
