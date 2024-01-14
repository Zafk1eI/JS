document.getElementById('Button').addEventListener('click', function () {
    let inputNumber = parseInt(document.getElementById('numberInput').value);
    if (!isNaN(inputNumber) && inputNumber >= 0) {
        let factorialResult = calculateFactorial(inputNumber);
        document.getElementById('factorialOutput').textContent = `Факториал числа ${inputNumber} равен ${factorialResult}`;
    } else {
        document.getElementById('factorialOutput').textContent = 'Введите корректное неотрицательное число.';
    }
});

function calculateFactorial(n) {
    return (n === 0 || n === 1) ? 1 : n * calculateFactorial(n - 1);
}