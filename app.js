let numeroAleatorio = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

//asignar texto a las etiquetas de texto valga la redundancia
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
}

// Genera un número aleatorio entre dos valores (inclusive)
function numeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(numerosSorteados);
    if(numerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se han sorteado todos los números posibles');
    }else{
        if (numerosSorteados.includes(numeroGenerado)){
            return numeroSecreto(); 
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

//verifica si el usuario acierta o no el número
function verificarIntento(){
    //obtener el valor del input y convertirlo a un entero
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroAleatorio);

    //el usuario acertó
    if(numeroUsuario === numeroAleatorio){
        asignarTextoElemento('p',`Felicidades, acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // el usuario no acertó
        if (numeroUsuario>numeroAleatorio) {
            asignarTextoElemento('p','Número incorrecto, el número es menor');
        } else {
            asignarTextoElemento('p','Número incorrecto, el número es mayor');
        }
        intentos++;
        limpiar();
    }
    return;
}

// función para limpiar los input después de cada intento
function limpiar(){
    let numeroIngresado = document.querySelector('#valorUsuario').value='';
}

// se encarga de reiniciar el juego
function reiniciarJuego() { 
    // location.reload(); 
    limpiar(); 
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
}

function condicionesIniciales(){ 
    asignarTextoElemento('h1','Juego del número secreto'); 
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo} :D`); 
    numeroAleatorio = numeroSecreto();
    intentos = 1; 
    return;
}

condicionesIniciales();