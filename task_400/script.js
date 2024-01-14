let radios = document.querySelectorAll('input[type="radio"]');
let output = document.getElementById('output');
let button = document.getElementById('button');

button.addEventListener('click', function () {
    for (let radio of radios) {
        if (radio.checked) {
            output.textContent = radio.value;
        }
    }
});