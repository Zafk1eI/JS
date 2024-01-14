let select = document.querySelector('#select');
let resultParagraph = document.querySelector('#resultParagraph');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
    resultParagraph.textContent = 'Selected option: ' + select.value;
});