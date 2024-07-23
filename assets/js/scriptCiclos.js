/* Solicitar N números por pantalla y mostrarlos, el usuario indica la cantidad de números */
/* for(inicio ; hasta ; salto){
    Bloque de instrucciones
} */
var limite = parseInt(prompt('¿Cuántos número desea ingresar?'));
for(var i = 1 ; i <= limite ; i = i + 1){
    var numero = prompt(`Ingresa el ${i}° número: `);
    console.log(`El ${i}° número es: ${numero}`);
}