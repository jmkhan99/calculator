const calculatorValue = document.querySelector(".calculator-value");
const calculatorTable = document.querySelector(".calculator-table");
const calculatorCell = document.querySelectorAll("td:not(.value-cell)");
let value = calculatorValue.innerText;

function addNumber(event) {
  value = value + event.target.outerText;
  calculatorValue.innerText = value;
  value = calculatorValue.innerText;
}
function deleteNumber() {
  calculatorValue.innerText = value.slice(0, -1);
  value = calculatorValue.innerText;
}

function deleteAllNumber() {
  calculatorValue.innerText = "";
  value = "";
}

function finalNumber() {
  calculatorValue.innerText = eval(calculatorValue.innerText);
  value = calculatorValue.innerText;
}

calculatorCell[2].addEventListener("click", deleteNumber);
calculatorCell[1].addEventListener("click", deleteAllNumber);
calculatorCell[19].addEventListener("click", finalNumber);

calculatorCell[11].addEventListener("click", addNumber);
calculatorCell[15].addEventListener("click", addNumber);
calculatorCell[7].addEventListener("click", addNumber);
calculatorCell[3].addEventListener("click", addNumber);

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
