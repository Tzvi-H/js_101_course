const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || isNaN(Number(number));
}

prompt('Welcome to the Calculator!');

while (true) {
  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(`'${number1}' is an invalid number. Please enter a valid number.`);
    number1 = readline.question();
  }

  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(`'${number2}' is an invalid number. Please enter a valid number.`);
    number2 = readline.question();
  }

  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1': output = Number(number1) + Number(number2);
    break;
    case '2': output = Number(number1) - Number(number2);
    break;
    case '3': output = Number(number1) * Number(number2);
    break;
    case '4': output = Number(number1) / Number(number2);
  }

  prompt(`The result is ${output}`);

  prompt('Would you like to perform another calculation? (y/n)');
  let answer = readline.question();
  if (answer[0].toLowerCase() !== 'y') break;
}