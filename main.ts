#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance: number = 10000; //DOLLAR
let myPin: number = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your pin:",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "please select option",
      choices: ["Withdraw", "CheckBalance", "FastCash"],
    },
  ]);
  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "enter your amount",
      },
    ]);
    if (amountAns.amount > myBalance) {
      console.log("Insufficient balance in your account!!!");
    } else if ((myBalance -= amountAns.amount)) {
      console.log("Your remaining balance:" + myBalance);
    }
  }
  if (operationAns.operation === "CheckBalance") {
    console.log("Your balance is: " + myBalance);
  } else if (operationAns.operation === "FastCash") {
    let cashAns = await inquirer.prompt([
      {
        name: "cash",
        type: "list",
        message: "select any option",
        choices: ["1000", "3000", "5000", "8000"],
      },
    ]);
    if ((myBalance -= cashAns.cash)) {
      console.log("Your remaining balance is:" + myBalance);
    }
  }
} else {
  console.log("Incorrect pin code!!!");
}
