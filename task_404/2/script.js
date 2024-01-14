let checkbox = document.getElementById('checkbox');
let button = document.getElementById('button');
let div = document.getElementById('div');

button.addEventListener('click', function () {
    if (checkbox.checked) {
        div.textContent = '111';
    } else {
        div.textContent = '222';
    }
});