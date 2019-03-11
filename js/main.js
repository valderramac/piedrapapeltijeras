var piedra = {
    gana: "tijeras",
    pierde: "papel",
    empata: "piedra"
}
var papel = {
    gana: "piedra",
    pierde: "tijeras",
    empata: "papel"
}
var tijeras = {
    gana: "papel",
    pierde: "piedra",
    empata: "tijeras"
}

var opciones = ["piedra", "papel" , "tijeras"]

var min = 0;
var max = 2;

var numero = Math.floor( Math.random() * (max - min + 1) + min);
var computadora = opciones[numero];
var jugadorUno = prompt("¿piedra, papel o tijeras?", "piedra");


while (!opciones.includes(jugadorUno)) {
    jugadorUno = prompt(jugadorUno.toUpperCase() +'!? '  + " Se serio, ¿piedra, papel o tijeras?", "piedra");
    console.log("el valor de jugadorUno dentro: " + jugadorUno );
} 


if (jugadorUno == computadora) {
    console.log("EMPATE")
    
} else if(eval(jugadorUno).pierde == computadora){
    console.log("PERDEDOR")
}else {
    console.log("GANADOR")
}                    



console.log("escogiste " + jugadorUno)
console.log("el valor de computadora: " + computadora);














