let numberInput = document.querySelector('#numberInput');
let resultParagraph = document.querySelector('#resultParagraph');

numberInput.addEventListener('blur', function() {
  let inputValue = numberInput.value;
  let sum = 0;

  for (let i = 0; i < inputValue.length; i++) {
    sum += parseInt(inputValue[i], 10) || 0;
  }

  resultParagraph.textContent = 'Сумма цифр: ' + sum;
});