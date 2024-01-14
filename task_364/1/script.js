let myInput = document.querySelector('#Input');
let myParagraph = document.querySelector('#Paragraph');

myInput.addEventListener('blur', function() {
  myParagraph.textContent += myInput.value;
});