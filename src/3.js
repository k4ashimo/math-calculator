// Get two numbers from the user
let num1 = prompt("Enter your first number");
let num2 = prompt("Enter your second number");

// Addition
function addition(num1, num2) {
  return num1 + num2;
}

// Subtraction
function subtraction(num1, num2) {
  return num1 - num2;
}

// Multiplication
function multiplication(num1, num2) {
  return num1 * num2;
}

// Division
function division(num1, num2) {
  return num1 / num2;
}

// Calculate the result of the selected operation
let result = addition(num1, num2);

// Display the result to the user
alert("The result is " + result);
