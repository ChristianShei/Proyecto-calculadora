
const pantalla = document.getElementById("Pantalla")

function agregarNumero(numero) {
    pantalla.value += numero;
}
function operador(operador) {
    pantalla.value += operador;
}

function borrarDatos (){
    pantalla.value = "0"
}

function resultado (a,b) {
    return a + b
}