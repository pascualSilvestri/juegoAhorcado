// Definir variables 











// canvas1 
let pantalla = document.querySelector('#canvas1');
let pincel = pantalla.getContext('2d');


function crearRectangulo(poX,poY,largo,alto,color){
    pincel.fillStyle = color
    pincel.fillRect(poX,poY,largo,alto);
}

function crearCirculo(){

}

crearRectangulo(50,15,10,120,'#0A3871');
crearRectangulo(10,130,250,5,'#0A3871');
crearRectangulo(50,15,150,5,'#0A3871');
crearRectangulo(170,15,10,20,'#0A3871');






