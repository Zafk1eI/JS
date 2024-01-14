(function (selector1, selector2, selector3, btnSelector) {
    let num1Input = document.querySelector(selector1);
    let num2Input = document.querySelector(selector2);
    let num3Input = document.querySelector(selector3);
    let calculateBtn = document.querySelector(btnSelector);

    function calculateSum() {
        const num1 = parseFloat(num1Input.value) || 0;
        const num2 = parseFloat(num2Input.value) || 0;
        const num3 = parseFloat(num3Input.value) || 0;

        const sum = num1 + num2 + num3;
        console.log('Сумма введенных чисел:', sum);
    }

    calculateBtn.addEventListener('click', calculateSum);
})('#num1', '#num2', '#num3', '#calculateBtn');