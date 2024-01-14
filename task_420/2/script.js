let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let resultParagraph = document.getElementById('result');
let calculateLink = document.getElementById('calculateLink');

calculateLink.addEventListener('click', function (event) {
    event.preventDefault();
    let sum = parseFloat(input1.value) + parseFloat(input2.value);
    resultParagraph.textContent = `Sum: ${sum}`;
});