function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function toggleSign() {
    const display = document.getElementById('display');
    if (display.value) {
        display.value = (parseFloat(display.value) * -1).toString();
    }
}

function calculatePercentage() {
    const display = document.getElementById('display');
    if (display.value) {
        display.value = (parseFloat(display.value) / 100).toString();
    }
}