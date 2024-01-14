let textarea = document.querySelector('#elem');
let output = document.querySelector('#output');

textarea.addEventListener('blur', function () {
    output.textContent = textarea.value;
});