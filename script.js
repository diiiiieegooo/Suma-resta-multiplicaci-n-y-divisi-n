console.log("¡Bienvenido! Este programa realizará operaciones matemáticas básicas.");

console.log("Por favor, ingrese el primer número:");
let num1 = parseFloat(prompt("Número 1: "));

console.log("Ahora, ingrese el segundo número:");
let num2 = parseFloat(prompt("Número 2: "));

console.log("Seleccione la operación que desea realizar")
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num2 !== 0 ? num1 / num2 : "No se puede dividir por cero.";

console.log("El resultado de la suma es:", suma);
console.log("El resultado de la resta es:", resta);
console.log("El resultado de la multiplicación es:", multiplicacion);
console.log("El resultado de la división es:", division);
