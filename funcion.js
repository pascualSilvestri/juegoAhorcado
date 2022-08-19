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
    'cruel',
    'playa',
    'puro',
    'pure',
    'luna',
    'princesa',
    'nala',
    'lluvia',
    'llave',
    'carro',
    'perro',
    'password'
];

let paginaInicial = document.getElementById('pagina-inicial'); //pagina inicial
let paginaJuego = document.getElementById('pagina-juego'); // pagina del juego
let paginaPalabra = document.getElementById('pagina-ingreso-palabra'); // pagina para ingresar nueva palabras

let btnIniciar = document.getElementById('btn-iniciar'); // boton iniciar juego
let btnPalabra = document.getElementById('btn-palabra'); // boton agregar palabra

let btnNuevo = document.getElementById('btn-nuevo'); // boton para juego nuevo
let btnDesistir = document.getElementById('btn-desistir'); // boton desistir

let btnGuardar = document.getElementById('btn-guardar');  // Boto guardar 
let btnCancelar = document.getElementById('btn-cancelar'); // boton para cancelar agragar palabra

let divPalabra = document.getElementById('palabra');  // el div para las letras de la palabras
let letrasError = document.getElementById('letras-error'); // div de las letras de error

let agregarPalabra = document.getElementById('ingresar-palabra'); //input ingresar palabra para guardar 
let body = document.querySelector('body');

let conG = 0;
let conE = 0;

let banG = true;
let banP = true;

let contError = 0;


let ganaste = false;
let perdio = false;

let arrError = [];

let palabraRandom ;
// Funciones -----------------

function juegoNuevo(){
    reiniciar();
    limpiarCanvas();
    removerDiv(palabraRandom);
    removerError();
    eliminarMensajes();
    mostrarLetras();
    crearDivVacio(palabraRandom);
}

function reiniciar(){
    conG = 0;
    conE = 0;
    banG = true;
    banP = true;
    contError = 0;
    ganaste = false;
    perdio = false;
    arrError = [];
}

function crearArr(arg){
    let arr = [];
    for(let i = 0; i < arg.length ; i++){
        arr.push(arg[i]);
    }
    return arr;
}

function sortearPalabras(){
    let aleatorio = Math.floor(Math.random()*palabras.length);
    let palabra = palabras.slice(aleatorio,aleatorio+1).join('').toUpperCase();
    mostrarCon(palabra);
    return palabra;
}

function crearDivVacio(palabra){
        for (let i = 0; i < palabra.length; i++){
            let div = document.createElement('div');
            let input = document.createElement('input');
            input.classList.add('p-letras');
            input.readOnly = true;
            div.classList.add('letras'); 
            divPalabra.appendChild(div);
            div.appendChild(input);
        }
        conG = 0;
        conE = 0;
}

function removerDiv(){    //lista
    let listDiv = document.getElementsByClassName('letras');
    for (let i = listDiv.length; i > 0; i--) {
        divPalabra.removeChild(listDiv[0]);
    }
    
}

function removerError(){    //lista
    let listP = document.getElementsByClassName('error');
    let total = listP.length; 
    for (let i = 0; i < listP.length ;) {

        letrasError.removeChild(listP[0]);

    }
    
}

function eliminarMensajes(){
    let mensajeFinal = document.querySelector('.mensaje-final');
    let prueba = mensajeFinal.childNodes;

    if(mensajeFinal.childNodes.length !== 0){

        if(prueba[0].innerText === 'GANASTE'){
            eliminarMensajeGano();
        }else if(prueba[0].innerText === 'PERDISTE'){
            eliminarMensajePerdio();
        }
    }
    
    banG=true;
    banP=true;
}

function eliminarMensajePerdio(){
    let mensajeFinal = document.querySelector('.mensaje-final');
    let perdio = document.querySelector('.mensaje-final-perdio');

    if(mensajeFinal.innerHTML.length > 0) {
    mensajeFinal.style.display = 'none';
    mensajeFinal.removeChild(perdio);
    }
    console.log(mensajeFinal.innerHTML);
}

function eliminarMensajeGano(){
    let mensajeFinal = document.querySelector('.mensaje-final');
    let gano = document.querySelector('.mensaje-final-gano');
    console.log(mensajeFinal.innerHTML);

    if(mensajeFinal.innerHTML.length > 0) {
    mensajeFinal.style.display = 'none';
    mensajeFinal.removeChild(gano);
    }
    console.log(mensajeFinal.innerHTML);
    
}

function mensajeGano(){
    let mensajeFinal = document.querySelector('.mensaje-final');
    let parrafo = document.createElement('p');
    
        if(banG){
            mensajeFinal.appendChild(parrafo);
            parrafo.innerText = "GANASTE";
            mensajeFinal.style.display = "flex";
            parrafo.classList.add("mensaje-final-gano");
            banG =false;
        }
   
}

function mensajePerdio(){
    let mensajeFinal = document.querySelector('.mensaje-final');
    let parrafo = document.createElement('p');
        if(banP){
            mensajeFinal.appendChild(parrafo);
            parrafo.innerText = "PERDISTE";
            mensajeFinal.style.display = "flex";
            parrafo.classList.add("mensaje-final-perdio");
            banP=false;
        }
        
}

function error(letra,palabra){
    let p = document.createElement('p');
    let comparacion = arrError.join('');
    if(conE < 10 && ganaste === false){
        if(comparacion.includes(letra)===false){
            if(palabra.indexOf(letra) < 0){
                p.innerText = letra;
                p.classList.add('error');
                letrasError.appendChild(p);
                vidas(contError);
                arrError.push(letra);
                conE = conE + 1;
                console.log(comparacion);
            }
        }
    }
          
}

function gano(arr,palabra){
    let array =[];
    for (let i=0; i<palabra.length; i++) {
        let value = arr[i].value;
        array.push(value);
    }
    let comparacion = array.join('');
    
    if(comparacion == palabra) {
        mensajeGano();
        ganaste = true; 
    }
}

function ingresarLetra(letra,index){
        let listDiv = document.getElementsByClassName('letras');
        let input = document.getElementsByClassName('p-letras');
        input[index].value = letra;
        listDiv[index].appendChild(input[index]);
}

function letrasIguales(letra,palabra){
    if(palabra.includes(letra)===true){
        let index = palabra.indexOf(letra);
        let index2 = palabra.indexOf(letra,index+1);
        if(palabra[index]===palabra[index2]){
            ingresarLetra(letra,index2);
        }
    }
}

function letraPresionada(){   // Obtiene la letra presionada por teclado
    document.addEventListener('keydown', (e)=>{
        let teclaPresionada = e.key.toLocaleUpperCase();
        let code = e.keyCode;
        let redex = /[^0-9]|[A-Za-z]/;
        if(code >= 65 && code <= 90 || code === 192){
            if(redex.test(teclaPresionada)){
                console.log('Tecla Presionada es: ' + teclaPresionada + ' ' + typeof(code))
                return code;
            }
        }
    });
}

function mostrarCon(arg){
    console.log(arg);
}

function mostrarLetras(){
    palabraRandom = sortearPalabras();
    document.addEventListener('keydown',(e)=>{
        let letraPresionada = e.key.toUpperCase();    
        let palabra = palabraRandom.toUpperCase();
        let code = e.keyCode;
        let index = palabra.indexOf(letraPresionada);
        let listInput = document.getElementsByClassName('p-letras');
    
        if(code >= 65 && code <= 90 || code === 192){

            if(palabra.includes(letraPresionada)===true){
                if(conE <10){
                    ingresarLetra(letraPresionada,index);   
                    console.log(conG); 
                    conG = conG + 1;
                }
                
            }
             else{
                error(letraPresionada,palabra);
            }
            if(palabra.includes(letraPresionada) === true){
                letrasIguales(letraPresionada,palabra);
            }   
        }
        if(conE === 10){
            mensajePerdio();
        }
        gano(listInput,palabra);
        vidas(conE);
    });
}
// Eventos Botones ----------------

btnIniciar.addEventListener('click',()=>{
    paginaInicial.style.display = 'none';
    paginaJuego.style.display = 'flex';
    juegoNuevo();
    
});

btnPalabra.addEventListener('click',()=>{
    paginaInicial.style.display = 'none';
    paginaPalabra.style.display = 'flex';
});

btnDesistir.addEventListener('click',()=>{
    paginaInicial.style.display = 'flex';
    paginaJuego.style.display = 'none';
    removerDiv(palabraRandom);
});

btnCancelar.addEventListener('click',()=>{
    paginaInicial.style.display = 'flex';
    paginaPalabra.style.display = 'none';
});

btnGuardar.addEventListener('click',()=>{
    paginaJuego.style.display = 'flex';
    paginaPalabra.style.display = 'none';
});

btnNuevo.addEventListener('click',()=>{
    juegoNuevo();
    
});

function prueba(){

  
}


  // Muestra la tecla precionada



// btnNuevo.addEventListener("click", );






// canvas1 
let pantalla = document.querySelector('#canvas');
let pincel = pantalla.getContext('2d');

function limpiarCanvas(){
    pincel.clearRect(0,0,680,428);
    conE=0;
}


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
    pincel.arc(poX,poY,largo-2,alto-3,2*3.14);
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

function vidas(arg){

    if(arg==0){

    }
    if(arg==1){
        crearRectangulo(80,130,150,3,'#0A3871');
    }
    if(arg == 2){
        crearRectangulo(120,15,3,118,'#0A3871'); 
    }
    if(arg == 3){
        crearRectangulo(120,15,100,3,'#0A3871');
    }
    if(arg == 4){
        crearRectangulo(185,15,3,20,'#0A3871');
    }
    if(arg == 5){
        crearCirculo(186,45,10,0,'#0A3871');
    }
    if(arg == 6){
        crearRectangulo(185,54,3,40,'#0A3871'); 
    }
    if(arg == 7){
        dibujarLinea(185,60,170,80,'#0A3871');
    }
    if(arg == 8){
        dibujarLinea(185,94,170,113,'#0A3871');
    }
    if(arg == 9){
        dibujarLinea(188,60,205,80,'#0A3871');
    }
    if(arg == 10){
        dibujarLinea(188,94,205 ,113,'#0A3871');
    }
}

// dibujarLinea(170,70,130,90,'#0A3871');//brazo izquierda
// dibujarLinea(170,105,130,120,'#0A3871');//pierna izquierdo
// dibujarLinea(172,70,210,90,'#0A3871');//brezo derecha
// dibujarLinea(172,105,210,120,'#0A3871');//pierna derecha
// crearCirculo(172,50,15,0,'#0A3871'); //cabeza
// crearRectangulo(50,15,10,120,'#0A3871'); //mastil
// crearRectangulo(10,130,250,5,'#0A3871'); //suelo
// crearRectangulo(50,15,150,5,'#0A3871'); // trabesaño
// crearRectangulo(170,15,5,20,'#0A3871'); //soga
// crearRectangulo(169,65,5,40,'#0A3871');  ///cuerpo






