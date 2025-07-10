// 3. Condicional if
// Tomar decisiones con if, else if, else.
const prompt = require("prompt-sync")();

// Ejercicio 1:
// •Pide al usuario su edad.
let edad = prompt('Ingresa tu edad: ');
while (isNaN(edad) || edad < 1)
{
    console.log('La edad debe ser un valor entero mayor a 1, intenta nuevamente');
    edad = prompt('Ingresa tu edad: ');
}
// •Si es mayor o igual a 18, muestra "Puedes entrar".
// •Si no, muestra "No puedes entrar".
edad = parseInt(edad);
if (edad >= 18)
{
    console.log('Puedes entrar');
} else
{
    console.log('No puedes entrar');
}

// Ejercicio 2:
// •Pide un número.
let num = prompt('Ingresa un número: ');
while (isNaN(num))
{
    console.log('No has ingresado un número válido, intenta nuevamente');
    num = prompt('Ingresa un número: ');
}
// •Si es positivo, muestra "Es positivo".
// •Si es negativo, muestra "Es negativo".
// •Si es cero, muestra "Es cero".
num = parseFloat(num);
if (num > 0)
{
    console.log('Es positivo');
} else if(num < 0)
{
    console.log('Es negativo');
} else
{
    console.log('Es cero');
}