// Variables to store each part of the calculator operation.
// i.e. 7 + 5 => [firstNumber] [operator] [secondNumber]
let firstNumber = null, secondNumber = null, operator = null;

// Add two numbers together.
function add(a, b) { 
    return a + b;
}

// Subtract one number from another.
function subtract(a, b) { 
    return a - b;
}

// Multiply one number with another.
function multiply(a, b) { 
    return a * b;
}

// Divide one number by another.
function divide(a, b) { 
    return a / b;
}

// Perform a calculator operation on two numbers.
function operate(operator, a, b) { 
    switch(operator) { 
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
    }
}

// Add event listeners for the calculator buttons.
function addButtonEventListeners() {
    const calculatorButtons = document.querySelectorAll(".calculator-button");
    calculatorButtons.forEach(calculatorButton => calculatorButton.addEventListener('click', function() { calculatorButtonClicked(calculatorButton.textContent) }));
}

// Perform an operation when a calculator button is clicked.
function calculatorButtonClicked(val) { 
    switch(val)
    {
        case 'AC':
            clear();
            populateDisplay('', false);
            break;
        case '÷': 
        case 'x':
        case '-': 
        case '+':
            // Evaluate a previous expression before another operator is called.
            if(operator !== null) {
                calculatorButtonClicked('=');
                calculatorButtonClicked(val);
            }
            else {
                storeOperator(val);
                populateDisplay(val, true);
            }
            break;
        case '=':
            let operationResult = operate(operator, Number(firstNumber), Number(secondNumber));
            equals(operationResult);
            populateDisplay(operationResult, false);
            break;
        case '.':
        default: 
            storeValue(val);
            populateDisplay(val, true);
            break;
    }
}

// Populate the display when a calculator button is clicked.
function populateDisplay(val, isAppended) { 
    const displayLabel = document.querySelector(".display-label");
    if(isAppended)
        displayLabel.textContent += val;
    else
        displayLabel.textContent = val;
}

// Clear the stored values.
function clear() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
}

// Store the operation result and clear the remaining values.
function equals(val) { 
    firstNumber = val;
    secondNumber = null;
    operator = null;
}

// Store the operator being used.
function storeOperator(val) { 
    operator = val;
}

// Store the numerical value being used.
function storeValue(val) { 
    if(operator === null) {  
        if(firstNumber === null)
            firstNumber = val;
        else
            firstNumber += val;
    }
    else {
        if(secondNumber === null)
            secondNumber = val;
        else
            secondNumber += val;
    }
}

addButtonEventListeners();