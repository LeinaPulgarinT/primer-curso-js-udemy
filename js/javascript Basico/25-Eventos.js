//------EVENTO CLICK!---------
const boton = document.getElementById("myButton");

boton.addEventListener("click", () => {
  console.log("Click!");
  // console.log(e);
});

//--------EVENTO MOUSEROVER-----
// el evento mouseover significa el raton por encima, cada que yo ponga el raton encima me va contar
const contenedor = document.getElementById("contenedor");

contenedor.addEventListener("mouseover", () => {
  console.log('Ratón por encima')
});

//--------EVENTO MOUSEOUT-----
//Significa ratón por fuera, si salgo del contenedor o el elemento donde estoy me va capturar ese evento.
contenedor.addEventListener('mouseout', () => {
  console.log('Ratón por fuera')
})

//--------EVENTO FOCUS y Blur-----
//Focus captura el evento de cuando nos paremos en el input, es decir cuando estemos dentro del input y Blur cuando salimos del input

const nombre = document.getElementById('nombre');

nombre.addEventListener('focus', () => {
  console.log('FOCUS: estas dentro del input')
})

//-----EVENTO BLUR--------
nombre.addEventListener('blur', () => {
  console.log('BLUR: has salido del input')
})

//Con lo anterior podemos hacer cosas distintas dependiendo si el usuario esta dentro del focus o ha salido.


//-----------EVENTOS DEL DOCUMENT------------
//Estos eventos se dan sobre todo el documento en general , es decir que no necesito capturar un contenedor o un elemnto para capturar un evento, o poder ver como se comporta.

//--------------EVENTO KEYUP----------------
//El evento keyup se jecuta cuando suelto una tecla que estaba presionando, pasa exactamente en el momento en que la levantamos. Yo podria caturar ese evento y acceder a las propiedades que me devuelve ese objeto.
document.addEventListener('keyup', (e) => {
  // console.log('EJECUTANDOSE!')
  console.log('Haz pulsado la ' + e.key)
  if (e.key === 'a') {
    document.body.style.background = 'red'
  } else if (e.key === 'b') {
    document.body.style.background = 'blue'
  }

})

//---------EVENTO KEYDOWN--------
//keydown sucede cuando tengo la tecla presionada, la diferencia entre keyup y keydawn es que con keyup se ejecuta el evento cuando soltamos la tecla y keydown sucede cuando tenemos la tecla presinada o cuando la presionamos.
document.addEventListener('keydown', (e) => {
  console.log('EJECUTANDOSE!')
  console.log(e)
})

//-------EVENTO KEYPRESS-------
//No es ni para arriba ni para abajo, simplemento me registra cuando psresiono una tecla.
document.addEventListener('keypress', (e) => {
  console.log(e)
})

//----------EVENTO PREVENTDEFAULT-----------
//los navegadores traer por defecto ciertos eventos, entonces preventdefault nos sirve para prevenir dichos eventos

document.addEventListener('keydown', (e) => {
  e.preventDefault()
})