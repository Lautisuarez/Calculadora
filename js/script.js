let pantalla = document.getElementById('pantalla');
let contador = "";
let resultado;

// Eventos 
document.getElementById('botones').addEventListener('click', mostrador);
document.getElementById('funciones').addEventListener('click', mostrador);
document.getElementById('borrar').addEventListener('click', function(e){
    // Reseteamos valores
    pantalla.value = 0;
    contador = "";
})

// Funciones para mostrar los que clickea el usuario por pantalla
function mostrador(e){
    // Obtenemos el valor del click
    let user = e.target.getAttribute('value');
    // Comparamos si es el primer click que da o no
    if(pantalla.value == 0){
        pantalla.value = user;
    } else{
        pantalla.value += user;
    }
    // Vemos si hizo click en "="(igual)
    if(user == "="){
        operaciones()
    }
    // Vamos acumulando todo los que clickea el usuario en la variable contador
    contador += user.toString();
}

// OPERACIONES
function operaciones(){
    console.log(contador);
}