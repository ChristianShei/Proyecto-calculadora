   
const visor = document.getElementById("Pantalla")  
   function agregarNumero(numero) {
   visor.value += numero;
}
  
   function agregarOperador(operador) {
   visor.value += operador;
}

function borrar (){
    visor.value = ""
}

function resultado (){
    visor.value = eval(visor.value) // eval = evalua expresiones matematicas

}
