
//-----------------------------------------modificar apuesta--------------------------------------------


//------------------------------------------------------------------------------------------------------

//-------------------------------------------juego y apuestas-------------------------------------------------------
function MostrarInstrucciones(){
    if(butn == 1){
        instrucciones.style.display = 'flex';
        butn += 1;
        console.log(butn)
    }else{
        instrucciones.style.display = 'none';
        butn -= 1;
        console.log("chau");
    }
}
let dineroDisponibleElement = document.getElementById('dineroDisponible');
let apuestaElement = document.getElementById('apuesta');
const usDadoElement = document.getElementById('usDado');
const resultElement = document.getElementById('result');
const botDado1Element = document.getElementById('botDado1');
const botDado2Element = document.getElementById('botDado2');
const instrucciones = document.getElementById('instrucciones');
let butn = 1;

let dineroDisponible = 1000; 
dineroDisponibleElement.textContent = dineroDisponible;
function tirarDados() {
  const apuesta = parseInt(apuestaElement.value);
  const usDado = parseInt(usDadoElement.value);

  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  const total = dado1 + dado2;

  if (total == usDado) {
    let ganancias = dineroDisponible + apuesta;
    dineroDisponible = ganancias;
    dineroDisponibleElement.textContent = dineroDisponible;
    resultElement.textContent = '¡Has ganado!';
    botDado1Element.textContent = `Dado 1: ${dado1}`;
    botDado2Element.textContent = `Dado 2: ${dado2}`;
  } else if(apuesta>dineroDisponible){
    alert("No posees el dinero suficiente para realizar esa apuesta");
  }
  else {
    let ganancias = dineroDisponible - apuesta;
    dineroDisponible = ganancias;
    dineroDisponibleElement.textContent = dineroDisponible;
    resultElement.textContent = 'Has perdido.';
    botDado1Element.textContent = `Dado 1: ${dado1}`;
    botDado2Element.textContent = `Dado 2: ${dado2}`;
  }
  
}
