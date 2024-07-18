function getNumber(num) {
    var input_var = document.getElementById('input');
    input_var.value += num;
}

function getOperand(operand) {
    var input_var = document.getElementById('input');
    switch (operand) {
        case '+':
        case '-':
        case '*':
        case '/':
            input_var.value += operand;
            break;
        case '+/-':
            if (input_var.value) {
                input_var.value = input_var.value.charAt(0) === '-' ? 
                    input_var.value.slice(1) : '-' + input_var.value;
            }
            break;
    }
}

function clearScreen() {
    document.getElementById('input').value = "";
    document.getElementById('answer').value = "";
}

function backspace() {
    var input_var = document.getElementById('input');
    input_var.value = input_var.value.slice(0, -1);
}

function compute() {
    var input_var = document.getElementById('input');
    try {
        var ans = eval(input_var.value);
        document.getElementById('answer').value = '=' + ans;
    } catch (e) {
        document.getElementById('answer').value = 'HATA';
    }
}

var i = 0;
function brackets() {
    var input_var = document.getElementById('input');
    if (i == 0) {
        input_var.value += '(';
        i = 1;
    } else {
        input_var.value += ')';
        i = 0;
    }
}
