/* Instrucciones de flujo de datos */
/* IF - Switch */
/* if(condicional){
    Bloque de instrucciones
} */
/* Solicitar la edad a una persona para saber si es mayor de edad */
var edad = prompt('Ingrese su edad: ');
edad = parseInt(edad);
if (edad >= 18) {
    console.log(`La edad ${edad} corresponde a mayor de edad`);
}
/* En base a dos colores: rojo y verde, indicar cual es el favorito de un usuario */
var colorFavorito = prompt('Ingrese su color favorito (rojo o verde): ');
if (colorFavorito == 'rojo') {
    console.log('El color favorito es rojo');
} else {
    console.log('El color favorito es verde');
}
/* En base a tres colores: rojo, verde y amarillo, indicar cual es el favorito de un usuario */
/* if else if */
var colorFavorito = prompt('Ingrese su color favorito (rojo, verde o amarillo): ');
if (colorFavorito == 'rojo') {
    console.log('El color favorito es rojo');
} else if (colorFavorito == 'verde') {
    console.log('El color favorito es verde');
} else {
    console.log('El color favorito es amarillo');
}

/* Anidación de IF */
if(true){
    if(true){

    }
}else{
    if(true){

    }
}

/* En base a tres colores: rojo, verde y amarillo, indicar cual es el favorito de un usuario */
var colorFavorito = prompt('Ingrese su color favorito (rojo, verde o amarillo): ');
switch (colorFavorito) {
    case 'rojo':
        console.log('El color favorito es rojo');
        break;
    case 'verde':
        console.log('El color favorito es verde');
        break;
    default:
        console.log('El color favorito es amarillo');
        break;
}








