// Mostrar mensaje inicial al usuario
console.log("¡Bienvenido! Este programa realizará operaciones matemáticas básicas.");

// Solicitar el primer número al usuario
console.log("Por favor, ingrese el primer número:");
let num1 = parseFloat(prompt("Número 1: "));

// Solicitar el segundo número al usuario
console.log("Ahora, ingrese el segundo número:");
let num2 = parseFloat(prompt("Número 2: "));

// Realizar las operaciones matemáticas
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
// Manejar división por cero
let division = num2 !== 0 ? num1 / num2 : "No se puede dividir por cero.";

// Mostrar los resultados
console.log("El resultado de la suma es:", suma);
console.log("El resultado de la resta es:", resta);
console.log("El resultado de la multiplicación es:", multiplicacion);
console.log("El resultado de la división es:", division);
