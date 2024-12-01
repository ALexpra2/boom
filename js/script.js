let segundos = 5;

//Genera el numero Aleatorio
let numeroAleatorio = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
console.log(numeroAleatorio);


//Para que empieze al hacer enter o click
const getEnter= document.getElementById('userInput');

getEnter.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        iniciar();  
    }
}); 

document.addEventListener('click', function(event) {    
    if (event.target !== getEnter) {
        iniciar();
    }
});

//Genera la cuenta atras desde 5 establecida al principio
function cuentaAtras() {
    
    const cuenta = document.getElementById('countdown');
    if (segundos > 0) {
        cuenta.innerHTML = `<p>Cuenta atras: ${segundos} seg</p>`
        segundos--;
    }
    else {
        cuenta.innerHTML = `<p>Tiempo terminado</p>`;
        clearInterval(intervalo);
        comprobarJuego();
    }
}

function iniciar() {
   
   intervalo = setInterval(cuentaAtras, 1000);   //cuando poner let const o nada
}


//Una vez terminada la cuenta atras comprueba resultados
function comprobarJuego() {
    
    const numeroElegido = parseInt(document.getElementById('userInput').value);

    
    const resultado = document.getElementById('result');
    if (numeroElegido === numeroAleatorio) {
        resultado.innerHTML = `
        <p class='resultadoComparacion'>Tu numero ${numeroElegido} es igual al numero ${numeroAleatorio}</p>
        <p class='winResult'>!Enhorabuena, Has salvado el mundo!  👑"</p>`;
    }
    else {
        resultado.innerHTML = `
        <p class='resultadoComparacion'>Tu numero ${numeroElegido} es diferente al numero ${numeroAleatorio}</p>
        <p class='loseResult'>La bomba ha estallado</p>
        <img class='bomba' src='img/bomba.png' alt='Imagen de una bomba' />`;
    }
}


//Boton para reiniciar la partida
const botonReiniciar = document.getElementById('restart');

botonReiniciar.addEventListener('click', () => location.reload());



