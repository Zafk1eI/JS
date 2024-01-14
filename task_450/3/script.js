let input3 = document.getElementById('input3');
let output3 = document.getElementById('output3');

setInterval(function () {
    let inputValue = Number(input3.value);
    output3.textContent = inputValue * inputValue;
}, 1000);