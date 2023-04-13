alert("¡Bienvenido a mates en linea, a continuación podrá realizar sumas, restas, multiplicaciones o divisiones:");

let num1 = parseFloat(prompt("Por favor, ponga el primer número aquí: "));

let num2 = parseFloat(prompt("Ahora, ponga el segundo número aquí: "));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num2 !== 0 ? num1 / num2 : "No es posible realizar operaciones por cero.";

alert("El resultado de la suma es: " + suma);
alert("El resultado de la resta es: " + resta);
alert("El resultado de la multiplicación es: " + multiplicacion);
alert("El resultado de la división es: " + division);