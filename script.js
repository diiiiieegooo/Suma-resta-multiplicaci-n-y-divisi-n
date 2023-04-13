alert("¡Bienvenido! Este programa realizará operaciones matemáticas básicas.");

let num1 = parseFloat(prompt("Por favor, ingrese el primer número: "));

let num2 = parseFloat(prompt("Ahora, ingrese el segundo número: "));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num2 !== 0 ? num1 / num2 : "No se puede dividir por cero.";

alert("El resultado de la suma es: " + suma);
alert("El resultado de la resta es: " + resta);
alert("El resultado de la multiplicación es: " + multiplicacion);
alert("El resultado de la división es: " + division);
