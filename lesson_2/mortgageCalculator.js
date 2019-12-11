const READLINE = require('readline-sync');
const MESSAGES = require('./mortgageCalculatorMessages.json');

let prompt = message => console.log(`=> ${message}`);
let lineBreak = () => console.log();

prompt(MESSAGES['welcome']);

while (true) {
  lineBreak();
  prompt(MESSAGES['loanAmount']);
  let loanAmount = Number(READLINE.question());
  while (!(loanAmount > 0)) {
    prompt(MESSAGES['invalidAmount']);
    loanAmount = Number(READLINE.question());
  }

  lineBreak();
  prompt(MESSAGES['aprRate']);
  let aprRate = Number(READLINE.question());
  while (!(aprRate > 0)) {
    prompt(MESSAGES['invalidAmount']);
    aprRate = Number(READLINE.question());
  }

  lineBreak();
  prompt(MESSAGES['loanYearsDuration']);
  let loanYearsDuration = Number(READLINE.question());
  while (!(loanYearsDuration > 0)) {
    prompt(MESSAGES['invalidAmount']);
    loanYearsDuration = READLINE.question();
  }

  let annualInterestRate = aprRate / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let loanMonthsDuration = loanYearsDuration * 12;

  let monthlyPayment = loanAmount *
  (monthlyInterestRate /
    (1 - Math.pow(
      (1 + monthlyInterestRate),(-loanMonthsDuration)
      )
    )
  );

  lineBreak();
  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  lineBreak();
  prompt(MESSAGES['goAgain']);
  let response = READLINE.question().toLowerCase();
  while (!['yes', 'y', 'no', 'n'].includes(response)) {
    prompt(MESSAGES['invalidResponse']);
    response = READLINE.question().toLowerCase();
  }
  if (['no', 'n'].includes(response)) break;
}

lineBreak();
prompt(MESSAGES['goodbye']);