let firstNumber = parseFloat(prompt('Enter first number: '));
let secondNumber = parseFloat(prompt('Enter second number: '));

while (isNaN(firstNumber) || isNaN(secondNumber)) {
    firstNumber = parseFloat(prompt('Enter first number again: '));
    secondNumber = parseFloat(prompt('Enter second number again: '));
}

let operator = prompt('Enter operator: ');

while (operator !== '+' && operator !== '-' && operator !== '/' && operator !== '*') {
    operator = prompt('Enter operator again: ')
}

function calculate (){

 switch(operator){
    case '+':
         console.log(`${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber}`);
        break;
    case '-':
        console.log(`${firstNumber} - ${secondNumber} = ${firstNumber-secondNumber}`);
        break;
    case "/":
        console.log(`${firstNumber} / ${secondNumber} = ${firstNumber/secondNumber}`);
        break;
    case "*":
        console.log(`${firstNumber} * ${secondNumber} = ${firstNumber*secondNumber}`);
        break;
}
}
calculate(firstNumber, secondNumber, operator);