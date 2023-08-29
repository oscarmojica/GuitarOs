//MODAL TERMINOS Y CONDICIONES DE DATOS

let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');

abrir.addEventListener('click', function(){
    modal.style.display = 'block';
});
cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        modal.style.display = 'none';
    }
});


//2-MODAL DE TERMINOS DE BODEGA

let modal2 = document.getElementById('miModal2');
let flex2 = document.getElementById('flex2');
let abrir2 = document.getElementById('abrir2');
let cerrar2 = document.getElementById('close2');

abrir2.addEventListener('click', function(){
    modal2.style.display = 'block';
});
cerrar2.addEventListener('click', function(){
    modal2.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        modal2.style.display = 'none';
    }
});

//3-MODAL DE TERMINOS DE GARANTIAS

let modal3 = document.getElementById('miModal3');
let flex3 = document.getElementById('flex3');
let abrir3 = document.getElementById('abrir3');
let cerrar3 = document.getElementById('close3');

abrir3.addEventListener('click', function(){
    modal3.style.display = 'block';
});
cerrar3.addEventListener('click', function(){
    modal3.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        modal3.style.display = 'none';
    }
});

//4-MODAL DE TERMINOS DE ENVIO

let modal4 = document.getElementById('miModal4');
let flex4 = document.getElementById('flex4');
let abrir4 = document.getElementById('abrir4');
let cerrar4 = document.getElementById('close4');

abrir4.addEventListener('click', function(){
    modal4.style.display = 'block';
});
cerrar4.addEventListener('click', function(){
    modal4.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        modal4.style.display = 'none';
    }
});
//5-MODAL DE TERMINOS DE PAGO

let modal5 = document.getElementById('miModal5');
let flex5 = document.getElementById('flex5');
let abrir5 = document.getElementById('abrir5');
let cerrar5 = document.getElementById('close5');

abrir5.addEventListener('click', function(){
    modal5.style.display = 'block';
});
cerrar5.addEventListener('click', function(){
    modal5.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        modal5.style.display = 'none';
    }
});




