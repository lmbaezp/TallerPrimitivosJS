// 5. Bucle for
// Repetir código un número exacto de veces.
const prompt = require("prompt-sync")();

// Ejercicio 1:
// •Usa un for para imprimir los números del 1 al 10 en consola.
for(let i=1; i<11; i++)
{
    console.log(i)
}

// Ejercicio 2:
// •Pide un número con prompt().
let num = prompt('Ingresa un número: ');
while (isNaN(num))
{
    console.log('Ingresa un número válido, intenta nuevamente');
    num = prompt('Ingresa un número: ');
}
num = parseInt(num);
if(num<0) 
{
    num = -1*num;
}
// •Usa un for para mostrar la tabla de multiplicar de ese número (del 1 al 10).
console.log('Tabla de multiplicar del', num);
for(let i=1;i<11;i++)
{
    console.log(num, 'x', i, '=', num*i)
}