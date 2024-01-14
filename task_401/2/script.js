let inputField = document.getElementById('inputField');
let outputParagraph = document.getElementById('outputParagraph');

inputField.addEventListener('change', function() {
    outputParagraph.textContent = inputField.value;
});