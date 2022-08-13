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
    'nala'

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

let palabraRandom = sortearPalabras().join();
// Funciones -----------------


function mostrarCon(arg){
    console.log(arg);
}


function ingresarNuevaPalabra(){
    let palabra = agregarPalabra.value;
    palabras.push(palabra);
    console.log(palabras);
    return palabra;
}


function sortearPalabras(){
    let aleatorio = Math.floor(Math.random()*palabras.length);
    let palabra = palabras.slice(aleatorio,aleatorio+1);
    mostrarCon(palabra);
    return palabra;
}


function crearDivVacio(palabra){
        for (let i = 0; i < palabra.length; i++){
            let div = document.createElement('div');
            div.classList.add('letras'); 
            divPalabra.appendChild(div);
        }
    
   
}

// function insertarLetras(palabra){
//     let listDiv = document.getElementsByClassName('letras');
//     for (let i=0; i<palabra.length; i++){
//         let p = document.createElement('p');
//         let letra = palabra[i];
//         p.innerText = letra;
//         p.classList.add('p-letras');
//         listDiv[i].appendChild(p);
//     }

// }

function removerDiv(){
    let listDiv = document.getElementsByClassName("letras"); 
    for(let i = 0 ; i < listDiv.length; i++){
        divPalabra.removeChild(listDiv[i]);
    }
}




function mensajePerdio(arg){
    let mensajeFinal = document.querySelector('.mensaje-final');
    let parrafo = document.createElement('p');
    if(arg === 10){
        mensajeFinal.appendChild(parrafo);
        parrafo.innerText = "Usted ha perdido";
        mensajeFinal.style.display = "flex";
        parrafo.classList.add("mensaje-final-perdio");
    }else{
        mensajeFinal.style.display = "none";
    }
}

function mostrarLetras(){
    document.addEventListener('keydown',function evaluarPalabra(e){
        let letraPresionada = e.key;    
        let listDiv = document.getElementsByClassName('letras');
        for (let i=0; i < palabraRandom.length; i++) {
            if(letraPresionada === palabraRandom[i]){
                let p = document.createElement('p');
                p.innerText = letraPresionada;
                p.classList.add('p-letras');
                listDiv[i].appendChild(p);
            }
        }  
    });
}





// Eventos Botones ----------------

btnIniciar.addEventListener('click',()=>{
    paginaInicial.style.display = 'none';
    paginaJuego.style.display = 'flex';
    crearDivVacio(palabraRandom); 
    mostrarLetras();
});

btnPalabra.addEventListener('click',()=>{
    paginaInicial.style.display = 'none';
    paginaPalabra.style.display = 'flex';
});

btnDesistir.addEventListener('click',()=>{
    paginaInicial.style.display = 'flex';
    paginaJuego.style.display = 'none';
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
    // mostrarLetras(palabraRandom);
    removerDiv();
    
});


  // Muestra la tecla precionada



// btnNuevo.addEventListener("click", );






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

crearCirculo(187,44,10,0,'#0A3871'); //cabeza
crearRectangulo(185,15,3,20,'#0A3871'); //soga
crearRectangulo(185,54,3,40,'#0A3871');  ///cuerpo
dibujarLinea(185,60,170,80,'#0A3871');//brazo izquierda
dibujarLinea(185,94,170,113,'#0A3871');//pierna izquierdo
dibujarLinea(188,60,205,80,'#0A3871');//brezo derecha
dibujarLinea(188,94,205 ,113,'#0A3871');//pierna derecha
crearRectangulo(120,15,100,3,'#0A3871'); // trabesaño
crearRectangulo(120,15,3,118,'#0A3871'); //mastil
crearRectangulo(80,130,150,3,'#0A3871'); //suelo






