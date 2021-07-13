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

calculatorValue.value = "0";

function addNumber(number) {
  if (waitingForSecondOperand === true) {
    calculatorValue.value = number;
    waitingForSecondOperand = false;
    return;
  } else {
    calculatorValue.value =
      calculatorValue.value === "0" ? number : calculatorValue.value + number;
  }
}
function addDot(dot) {
  if (waitingForSecondOperand === true) {
    calculatorValue.value = "0.";
    waitingForSecondOperand = false;
    return;
  }
  if (!calculatorValue.value.includes(".")) {
    calculatorValue.value = calculatorValue.value + dot;
  }
}
function addOp(operator) {
  if (operatorVari === null && operator === "=") {
    firstOperand = null;
    firstOperandViews.value = firstOperand;
    return;
  }
  if (firstOperand === null || operatorVari === null) {
    firstOperand = calculatorValue.value;
    firstOperandViews.value = firstOperand;
    operatorVari = operator;
    operatorViews.innerText = operatorVari;
    waitingForSecondOperand = true;
    return;
  }
  if (waitingForSecondOperand === true) {
    operatorVari = operator !== "=" ? operator : null;
    operatorViews.innerText = operatorVari;
    firstOperand = operator !== "=" ? firstOperand : null;
    firstOperandViews.value = firstOperand;
    return;
  }
  if (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "/"
  ) {
    secondNum = calculatorValue.value;
    nextOperatorVari = operator;
    finalNumber(firstOperand, secondNum, operatorVari);
    return;
  }
  if (operator === "=") {
    secondNum = calculatorValue.value;
    nextOperatorVari = null;
    finalNumber(firstOperand, secondNum, operatorVari);
    return;
  }
}
function deleteNumber() {
  if (waitingForSecondOperand === true) {
    calculatorValue.value = "0";
  }
  if (calculatorValue.value[0] === "-") {
    calculatorValue.value =
      calculatorValue.value.length === 2
        ? "0"
        : calculatorValue.value.slice(0, -1);
    firstOperand = null;
    firstOperandViews.value = firstOperand;
    return;
  }
  if (operatorVari === null && firstOperand !== null) {
    calculatorValue.value = calculatorValue.value.slice(0, -1);
    firstOperand = null;
    firstOperandViews.value = firstOperand;
    return;
  }
  calculatorValue.value =
    calculatorValue.value.length === 1
      ? "0"
      : calculatorValue.value.slice(0, -1);
}

function deleteAllNumber() {
  calculatorValue.value = "0";
  firstOperand = null;
  operatorVari = null;
  waitingForSecondOperand = false;
  secondNum = null;
  firstOperandViews.value = "";
  operatorViews.innerText = "";
}

function finalNumber(a, b, operator) {
  if (operator === "+") {
    calculatorValue.value = parseFloat(
      (parseFloat(a) + parseFloat(b)).toFixed(7)
    );
    firstOperand = calculatorValue.value;
    firstOperandViews.value = firstOperand;
    operatorVari = nextOperatorVari;
    operatorViews.innerText = operatorVari;
    waitingForSecondOperand = operatorVari !== null ? true : false;
    return;
  }
  if (operator === "-") {
    calculatorValue.value = parseFloat(
      (parseFloat(a) - parseFloat(b)).toFixed(7)
    );
    firstOperand = calculatorValue.value;
    firstOperandViews.value = firstOperand;
    operatorVari = nextOperatorVari;
    operatorViews.innerText = operatorVari;
    waitingForSecondOperand = operatorVari !== null ? true : false;
    return;
  }
  if (operator === "*") {
    calculatorValue.value = parseFloat(
      (parseFloat(a) * parseFloat(b)).toFixed(7)
    );
    firstOperand = calculatorValue.value;
    firstOperandViews.value = firstOperand;
    operatorVari = nextOperatorVari;
    operatorViews.innerText = operatorVari;
    waitingForSecondOperand = operatorVari !== null ? true : false;
    return;
  }
  if (operator === "/") {
    calculatorValue.value = parseFloat(
      (parseFloat(a) / parseFloat(b)).toFixed(7)
    );
    firstOperand = calculatorValue.value;
    firstOperandViews.value = firstOperand;
    operatorVari = nextOperatorVari;
    operatorViews.innerText = operatorVari;
    waitingForSecondOperand = operatorVari !== null ? true : false;
    return;
  }
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
