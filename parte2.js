// 2. Ingreso de Datos por Teclado
// Usar prompt() para pedir datos al usuario.
const prompt = require("prompt-sync")();

// Ejercicio 1:
// •Pide al usuario su año de nacimiento con prompt().
let anioNacimiento = parseInt(prompt('Ingresa tu año de nacimiento: '));
while(isNaN(anioNacimiento) || anioNacimiento < 1975)
{
    console.log('Debes ingresar un año de nacimiento válido, intenta nuevamente');
    anioNacimiento = parseInt(prompt('Ingresa tu año de nacimiento: '));
}
// •Calcula su edad.
let edad = 2025 - anioNacimiento;
// •Muestra.
console.log('Tu edad es', edad, 'años');

// Ejercicio 2:
// •Pide dos números con prompt().
let num1 = prompt('Ingresa un primer número: ');
while(isNaN(num1))
{
    console.log('Debes ingresar un número válido, intenta nuevamente');
    num1 = prompt('Ingresa un primer número: ');
}
let num2 = prompt('Ingresa un segundo número: ');
while(isNaN(num2))
{
    console.log('Debes ingresar número válido, intenta nuevamente');
    num2 = prompt('Ingresa un segundo número: ');
}
// •Convierte los datos a número.
num1 = parseFloat(num1)
num2 = parseFloat(num2)
// •Muestra la suma en consola.
console.log(num1, ' + ', num2, ' = ', num1+num2)
