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

const number1 = parseInt(window.prompt("Enter your age: "));
const number2 = parseInt(window.prompt("Enter your age: "));
1

saySomething("The sum is " + add(number1, number2) + ".");