// Elements
const firstNumberInput = document.getElementById('first_number');
const secondNumberInput = document.getElementById('second_number');

const addOpInput = document.getElementById('add_op');
const subtractOpInput = document.getElementById('subtract_op');
const multiplyOpInput = document.getElementById('multiply_op');
const divideOpInput = document.getElementById('divide_op');

const resultOpInput = document.getElementById('result');

// States
let operator = '+';
let firstNumber = 0;
let secondNumber = 0;

// Logic
const execOp = () => {
    let success = true;
    let result = 0;

    const x = Number(firstNumber);
    const y = Number(secondNumber);

    switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case 'x':
            result = x * y;
            break;
        case '/':
            if (y === 0) { success = false; }
            else { result = x / y; }
            break;
    };

    printResult(success, result);
};

const printResult = (success, result) => {
    if (success) {
        if (Number.isNaN(result)) {
            resultOpInput.value = "No se ingresaron valores numéricos";
            resultOpInput.classList.add('--op-failed');

            firstNumberInput.classList.add('--op-failed');
            secondNumberInput.classList.add('--op-failed');
        }
        else {
            resultOpInput.value = result;
            resultOpInput.classList.remove('--op-failed');

            firstNumberInput.classList.remove('--op-failed');
            secondNumberInput.classList.remove('--op-failed');
        }
    } else {
        resultOpInput.value = "No se puede dividir por 0";
        resultOpInput.classList.add('--op-failed');

        secondNumberInput.classList.add('--op-failed');
    }
};

// Event Handlers
firstNumberInput.addEventListener('input', (event) => {
    firstNumber = event.target.value;
    execOp();
});
secondNumberInput.addEventListener('input', (event) => {
    secondNumber = event.target.value;
    execOp();
});

addOpInput.addEventListener('change', (event) => {
    operator = event.target.value;
    execOp();
});
subtractOpInput.addEventListener('change', (event) => {
    operator = event.target.value;
    execOp();
});
multiplyOpInput.addEventListener('change', (event) => {
    operator = event.target.value;
    execOp();
});
divideOpInput.addEventListener('change', (event) => {
    operator = event.target.value;
    execOp();
});
