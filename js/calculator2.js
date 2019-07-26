const Calculator = {
    displayValue: '0', 
    firstOperand: null,
    waitSecondOperand: false,
    operator: null,
};

function InputDigit(digit) {
    const { displayValue, waitSecondOperand } = Calculator;
    if (waitSecondOperand === true) {
        Calculator.displayValue = digit;
        Calculator.waitSecondOperand = false;
    } else {
        Calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function InputDecimal(dot) {
    if (Calculator.waitSecondOperand === true) return;
    if(!Calculator.displayValue.includes(dot)) {
        Calculator.displayValue += dot;
    }
}

function HandleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = Calculator;
    const valueOfInput = parseFloat(displayValue);

    if(operator && Calculator.waitSecondOperand) {
        Calculator.operator = nextOperator;
        return;
    }
    if (firstOperand == null) {
        Calculator.firstOperand = valueOfInput;
    } else if (operator) {
        const valueNow = firstOperand || 0;
        const result = PerformCalulculation[operator](valueNow, valueOfInput);

        Calculator.displayValue = String(result);
        Calculator.firstOperand = result;
    }

    Calculator.waitSecondOperand = true;
    Calculator.operator = nextOperator;
}

const PerformCalulculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

function CalculatorReset() {
    Calculator.displayValue = '0';
    Calculator.firstOperand = null;
    Calculator.waitSecondOperand = false;
    Calculator.operator = null;
}

function UpdateDisplay() {
    var display = document.getElementsByClassName("calculator-screen");
    display.value = Calculator.displayValue;
}

UpdateDisplay();

var keys = document.getElementById("keys");
console.log(keys);
keys.addEventListener("click", (event) => {
    const {target} = event;
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        HandleOperator(target.value);
        UpdateDisplay();
        return;
    }
    if (target.classList.contains("decimal")) {
        InputDecimal(target.value);
        UpdateDisplay();
        return;
    }
    if (target.classList.contains("all-clear")) {
        CalculatorReset();
        UpdateDisplay();
        return;
    }

    InputDigit(target.value);
    UpdateDisplay();

});