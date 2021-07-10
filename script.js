const calculatorValue = document.querySelector(".calculator-value");
const calculatorTable = document.querySelector(".calculator-table");
const calculatorCell = document.querySelectorAll("td:not(.value-cell)");
let nowValue = calculatorValue.innerText;

function addNumber(event) {
  nowValue = nowValue + event.target.outerText;
  calculatorValue.innerText = nowValue;
  nowValue = nowValue;
}
function addOp(event) {
  nowValue = nowValue + event.target.outerText;
  calculatorValue.innerText = nowValue;
  nowValue = nowValue;
}
function deleteNumber() {
  calculatorValue.innerText = nowValue.slice(0, -1);
  nowValue = calculatorValue.innerText;
}

function deleteAllNumber() {
  calculatorValue.innerText = "";
  nowValue = "";
}

function finalNumber() {
  calculatorValue.innerText = new Function("return " + nowValue)();
  nowValue = calculatorValue.innerText;
}

calculatorCell[2].addEventListener("click", deleteNumber);
calculatorCell[1].addEventListener("click", deleteAllNumber);
calculatorCell[19].addEventListener("click", finalNumber);

calculatorCell[11].addEventListener("click", addOp);
calculatorCell[15].addEventListener("click", addOp);
calculatorCell[7].addEventListener("click", addOp);
calculatorCell[3].addEventListener("click", addOp);

calculatorCell[18].addEventListener("click", addNumber);
calculatorCell[17].addEventListener("click", addNumber);
calculatorCell[14].addEventListener("click", addNumber);
calculatorCell[13].addEventListener("click", addNumber);
calculatorCell[12].addEventListener("click", addNumber);
calculatorCell[10].addEventListener("click", addNumber);
calculatorCell[9].addEventListener("click", addNumber);
calculatorCell[8].addEventListener("click", addNumber);
calculatorCell[6].addEventListener("click", addNumber);
calculatorCell[5].addEventListener("click", addNumber);
calculatorCell[4].addEventListener("click", addNumber);
