let numbersInput = document.querySelector('#numbersInput');
let averageParagraph = document.querySelector('#averageParagraph');

numbersInput.addEventListener('blur', function() {
  let inputValues = numbersInput.value.split(',').map(Number);

  let numbers = inputValues.filter(value => !isNaN(value));

  let average = numbers.length > 0 ? numbers.reduce((sum, num) => sum + num, 0) / numbers.length : 0;

  averageParagraph.textContent = 'Среднее арифметическое: ' + average;
});