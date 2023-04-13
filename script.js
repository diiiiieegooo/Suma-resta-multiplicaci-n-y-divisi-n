let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num2 !== 0 ? num1 / num2 : "No se puede dividir por cero.";

console.log("El resultado de la suma es:", suma);
console.log("El resultado de la resta es:", resta);
console.log("El resultado de la multiplicación es:", multiplicacion);
console.log("El resultado de la división es:", division);