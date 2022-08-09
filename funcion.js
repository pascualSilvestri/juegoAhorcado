// Definir variables 

let palabras = [
    'pezcado',
    'hormiga',
    'pedazo',
    'tortuga',
    'cartero',
    'dinero',
    'suela',
    'frutilla',
    'cazon',
    'calzon',
    'cruel'
];


let divPalabra = document.getElementById('palabra');

// Funciones -----------------



function mostrarCon(arg){
    console.log(arg);
}


function sorteraPalabras(){
    let aleatorio = Math.floor(Math.random()*palabras.length);
    let palabra = palabras.slice(aleatorio,aleatorio+1);
    mostrarCon(palabra);
    mostrarCon(aleatorio);
    return palabra;
}

function crearDiv(letra){
    let div = document.createElement('div');
    div.innerText = letra;
    div.classList.add('letras'); 
    divPalabra.appendChild(div);
}


crearDiv('A');
crearDiv('B');
crearDiv('C');



let prueba = sorteraPalabras();





// canvas1 
let pantalla = document.querySelector('#canvas');
let pincel = pantalla.getContext('2d');


function crearRectangulo(poX,poY,largo,alto,color){
    pincel.fillStyle = color
    pincel.fillRect(poX,poY,largo,alto);
}

function crearCirculo(poX,poY,largo,alto,color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(poX,poY,largo,alto,2*3.14);
    pincel.fill();
    pincel.fillStyle = '#ebebeb';
    pincel.beginPath();
    pincel.arc(poX,poY,largo-3,alto-3,2*3.14);
    pincel.fill();
}

function dibujarLinea(poX,poY,poX2,poY2,color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.moveTo(poX,poY);
    pincel.lineTo(poX2,poY2);
    pincel.strokeStyle = color;
    pincel.stroke();
}

dibujarLinea(170,70,130,90,'#0A3871');//brazo izquierda
dibujarLinea(170,105,130,120,'#0A3871');//pierna izquierdo
dibujarLinea(172,70,210,90,'#0A3871');//brezo derecha
dibujarLinea(172,105,210,120,'#0A3871');//pierna derecha
crearCirculo(172,50,15,0,'#0A3871'); //cabeza
crearRectangulo(50,15,10,120,'#0A3871'); //mastil
crearRectangulo(10,130,250,5,'#0A3871'); //suelo
crearRectangulo(50,15,150,5,'#0A3871'); // trabesaño
crearRectangulo(170,15,5,20,'#0A3871'); //soga
crearRectangulo(169,65,5,40,'#0A3871');  ///cuerpo






