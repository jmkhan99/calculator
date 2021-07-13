"use strict";

const calculatorValue = document.querySelector(".calculator-value");
const calculatorTable = document.querySelector(".calculator-table");
const calculatorCell = document.querySelectorAll("td:not(.value-cell)");
const secondNumberViews = document.querySelector(".second-number-views");
let operatorViews = document.querySelector(".operator-views");
const firstOperandViews = document.querySelector(".first-operand-views");
let firstOperand = null;
let operatorVari = null;
let waitingForSecondOperand = false;
let secondNum = null;
let nextOperatorVari = null;

calculatorValue.innerText = "0";

function addNumber(number) {
  if (waitingForSecondOperand === true) {
    console.log("addnumber second");
    calculatorValue.innerText = number;
    waitingForSecondOperand = false;
    return;
  } else {
    console.log("addnumber first");
    calculatorValue.innerText =
      calculatorValue.innerText === "0"
        ? number
        : calculatorValue.innerText + number;
  }
}
function addDot(dot) {
  if (waitingForSecondOperand === true) {
    calculatorValue.innerText = "0.";
    waitingForSecondOperand = false;
    return;
  }
  if (!calculatorValue.innerText.includes(".")) {
    calculatorValue.innerText = calculatorValue.innerText + dot;
  }
}
function addOp(operator) {
  if (operatorVari === null && operator === "=") {
    console.log("zero bug2");
    return;
  }
  if (firstOperand === null || operatorVari === null) {
    console.log("first operand + operator");
    firstOperand = calculatorValue.innerText;
    firstOperandViews.innerText = firstOperand;
    operatorVari = operator;
    operatorViews.innerText = operatorVari;
    waitingForSecondOperand = true;
    return;
  }
  if (waitingForSecondOperand === true) {
    console.log("change operator");
    operatorVari = operator !== "=" ? operator : null;
    operatorViews.innerText = operatorVari;
    return;
  }
  if (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "/"
  ) {
    console.log("go final");
    secondNum = calculatorValue.innerText;
    nextOperatorVari = operator;
    console.log(nextOperatorVari);
    finalNumber(firstOperand, secondNum, operatorVari);
    return;
  }
  if (operator === "=") {
    secondNum = calculatorValue.innerText;
    nextOperatorVari = null;
    console.log(nextOperatorVari);
    finalNumber(firstOperand, secondNum, operatorVari);
    return;
  }
}
function deleteNumber() {
  if (waitingForSecondOperand === true) {
    console.log("del bug");
    calculatorValue.innerText = "0";
  }
  if (operatorVari === null && firstOperand !== null) {
    console.log("del bug2");
    calculatorValue.innerText = calculatorValue.innerText.slice(0, -1);
    firstOperand = null;
    firstOperandViews.innerText = firstOperand;
    return;
  }
  calculatorValue.innerText = calculatorValue.innerText.slice(0, -1);
}

function deleteAllNumber() {
  calculatorValue.innerText = "0";
  firstOperand = null;
  operatorVari = null;
  waitingForSecondOperand = false;
  secondNum = null;
  firstOperandViews.innerText = "";
  operatorViews.innerText = "";
}

function finalNumber(a, b, operator) {
  if (operator === "+") {
    console.log("final plus");
    calculatorValue.innerText = parseFloat(
      (parseFloat(a) + parseFloat(b)).toFixed(7)
    );
    firstOperand = calculatorValue.innerText;
    firstOperandViews.innerText = firstOperand;
    operatorVari = nextOperatorVari;
    operatorViews.innerText = operatorVari;
    waitingForSecondOperand = operatorVari !== null ? true : false;
    return;
  }
  if (operator === "-") {
    console.log("final -");
    calculatorValue.innerText = parseFloat(
      (parseFloat(a) - parseFloat(b)).toFixed(7)
    );
    firstOperand = calculatorValue.innerText;
    firstOperandViews.innerText = firstOperand;
    operatorVari = nextOperatorVari;
    operatorViews.innerText = operatorVari;
    waitingForSecondOperand = operatorVari !== null ? true : false;
    return;
  }
  if (operator === "*") {
    calculatorValue.innerText = parseFloat(
      (parseFloat(a) * parseFloat(b)).toFixed(7)
    );
    firstOperand = calculatorValue.innerText;
    firstOperandViews.innerText = firstOperand;
    operatorVari = nextOperatorVari;
    operatorViews.innerText = operatorVari;
    waitingForSecondOperand = operatorVari !== null ? true : false;
    return;
  }
  if (operator === "/") {
    calculatorValue.innerText = parseFloat(
      (parseFloat(a) / parseFloat(b)).toFixed(7)
    );
    firstOperand = calculatorValue.innerText;
    firstOperandViews.innerText = firstOperand;
    operatorVari = nextOperatorVari;
    operatorViews.innerText = operatorVari;
    waitingForSecondOperand = operatorVari !== null ? true : false;
    return;
  }
  console.log("what final");
}

calculatorTable.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.matches("td")) {
    return;
  }
  if (target.classList.contains("operator-keys")) {
    addOp(target.outerText);
    return;
  }
  if (target.classList.contains("dot")) {
    addDot(target.outerText);
    return;
  }
  if (target.classList.contains("delete-key")) {
    deleteNumber(target.outerText);
    return;
  }
  if (target.classList.contains("clear-key")) {
    deleteAllNumber(target.outerText);
    return;
  }
  addNumber(target.outerText);
});
