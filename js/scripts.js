function saySomething(whatToSay) {
  window.alert(whatToSay);
}

function add(number1, number2) {
  return number1 + number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

const number1 = parseInt(window.prompt("Enter your first number: "));
const number2 = parseInt(window.prompt("Enter your second number: "));


saySomething(number1 + " + " + number2 + " = " + add(number1, number2) + ".");
saySomething(number1 + " - " + number2 + " = " + subtract(number1, number2) + ".");
saySomething(number1 + " * " + number2 + " = " + multiply(number1, number2) + ".");
saySomething(number1 + " / " + number2 + " = " + divide(number1, number2) + ".");