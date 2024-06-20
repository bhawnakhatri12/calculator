let display = document.getElementById('display');
let currentInput = '';

function inputDigit(digit) {
    if (currentInput === '' && (digit === '+' || digit === '-' || digit === '*' || digit === '/')) {
        return;
    }
    currentInput += digit;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteDigit() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        display.innerText = '0';
    } else {
        display.innerText = currentInput;
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch {
        display.innerText = 'Error';
        currentInput = '';
    }
}
