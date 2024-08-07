
const prompt = require('prompt-sync')()
const num1 = parseFloat(prompt('Enter num1: '));
const operator = prompt('Enter operator (+, -, *, /): ');
const num2 = parseFloat(prompt('Enter num2: '));

let result;

switch (operator) {


case '+':
    result = num1 + num2;
    break;
case '-':
    result = num1 - num2;
    break;
case '*':
    result = num1 * num2;
    break;
case '/':
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = 'Error: Division by zero!';
    }
    break;
default:
    result = 'Error: Invalid operator!';
}

console.log(`Result: ${result}`);
