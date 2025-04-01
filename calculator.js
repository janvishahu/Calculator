function calculate(operation) {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let resultDisplay = document.querySelector(".result");
    
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Please enter valid numbers";
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
    }
    resultDisplay.textContent = `Result: ${result}`;
}

document.getElementById("Addition").addEventListener("click", () => calculate('add'));
document.getElementById("Subtraction").addEventListener("click", () => calculate('subtract'));
document.getElementById("Multiplication").addEventListener("click", () => calculate('multiply'));
document.getElementById("Division").addEventListener("click", () => calculate('divide'));