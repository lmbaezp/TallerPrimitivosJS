// 4. Bucle while
// Repetir código mientras una condición sea verdadera.
const prompt = require("prompt-sync")();

// Ejercicio 1:
// •Pide un número con prompt().
let num = prompt('Ingresa un número mayor a 1: ');
while (isNaN(num) || num < 1)
{
    console.log('Ingresa un número válido, intenta nuevamente');
    num = prompt('Ingresa un número: ');
}
num = parseInt(num);
// •Usa un while para contar desde 1 hasta ese número.
// •Muestra cada número en consola.
let count = 1
while(count <= num)
{
    console.log(count);
    count++;
}

// Ejercicio 2:
// •Pide una contraseña con prompt().
let password = prompt('Ingresa una contraseña de cuatro dígitos: ');
// •Usa un while para seguir preguntando hasta que ingrese "1234".
// •Cuando acierte, muestra "Contraseña correcta"
while(password != '1234')
{
    console.log('Contraseña incorrecta, intenta nuevamente');
    password = prompt('Ingresa una contraseña: ');
}
console.log('Contraseña correcta');