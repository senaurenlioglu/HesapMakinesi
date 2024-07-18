function appendToInput(num) {
    document.getElementById('input').value += num;
}
function appendOperand(operand) {
    const inputElement = document.getElementById('input');
    switch (operand) {
        case '+':
        case '-':
        case '*':
        case '/':
            inputElement.value += operand;
            break;
        case '+/-':
            if (inputElement.value) {
                inputElement.value = inputElement.value.charAt(0) === '-' ?
                    inputElement.value.slice(1) : '-' + inputElement.value;
            }
            break;
    }
}
function clearScreen() {
    document.getElementById('input').value = '';
    document.getElementById('answer').value = '';
}
function removeLastCharacter() {
    const inputElement = document.getElementById('input');
    inputElement.value = inputElement.value.slice(0, -1);
}
function calculateResult() {
    const inputElement = document.getElementById('input');
    try {
        const result = eval(inputElement.value);
        document.getElementById('answer').value = '=' + result;
    } catch (error) {
        document.getElementById('answer').value = 'HATA';
    }
}
let isOpeningBracket = false;
function toggleBrackets() {
    const inputElement = document.getElementById('input');
    if (!isOpeningBracket) {
        inputElement.value += '(';
        isOpeningBracket = true;
    } else {
        inputElement.value += ')';
        isOpeningBracket = false;
    }
}
