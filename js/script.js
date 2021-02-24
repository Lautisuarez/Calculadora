// Variables
let pantalla = document.getElementById('pantalla');
let typeOperation,
    number1,
    flagOperation=false;

// Eventos 
document.getElementById('botones').addEventListener('click', mostrador);
document.getElementById('funciones').addEventListener('click', mostrador);
document.getElementById('igual').addEventListener('click', mostrador);
document.getElementById('borrar').addEventListener('click', function(e){
    // Reseteamos valores
    pantalla.value = 0;
})

// Funcion para mostrar los que clickea el usuario por pantalla
function mostrador(e){
    // Obtenemos el valor del click
    let user = e.target.textContent;
    const d = e.target.dataset;
    // Nos aseguramos que el usuario no clickee entre los botones
    if (d.dead) return
    // Comparamos si es el primer click que da o si la bandera flagOperation esta encendida
    pantalla.value == 0 || flagOperation ? pantalla.value = user : pantalla.value += user;
    // Reseteamos valores
    flagOperation = false;
    // Verificamos si lo que clickeó el usuario es una operación
    if(d.operation) getOperation(d.operation, user);
}

// OPERACIONES
function getOperation(op, type){
    // Vemos si hizo click en "="(igual)
    if(type == "="){
        runCalculator();
        return
    }
    // Almacenamos el primer nro en una variable
    number1 = parseInt(pantalla.value);
    // Mostramos y almacenamos el tipo de operacion
    typeOperation = op;
    pantalla.value = type;
    // Prendemos la bandera en que ya se utilizo una operacion
    flagOperation = true;
}
function runCalculator(){
    let resultado,
        number2 = parseInt(pantalla.value);
    // Verificamos que operacion realizó
    switch (typeOperation) {
        case 'mul':
            resultado = number1 * number2;
            break;
        case 'div':
            resultado = number1 / number2;
            break;
        case 'sum':
            resultado = number1 + number2;
            break;
        case 'res':
            resultado = number1 - number2;
            break;
    }
    // Mostramos el resultado
    pantalla.value = resultado;

    // Resetamos los valores
    number1 = "";
    number2 = "";
}