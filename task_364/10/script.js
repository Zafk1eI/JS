let numberInput = document.querySelector('#numberInput');
let resultParagraph = document.querySelector('#resultParagraph');

numberInput.addEventListener('blur', function() {
  let inputValue = numberInput.value;

  if (containsDigitThree(inputValue)) {
    resultParagraph.textContent = 'Число содержит цифру 3!';
  } else {
    resultParagraph.textContent = 'Число не содержит цифру 3.';
  }
});

function containsDigitThree(number) {
  return String(number).includes('3');
}