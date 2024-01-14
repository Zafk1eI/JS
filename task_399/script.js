
//Задание 2
let checkbox = document.getElementById('checkbox');
let button = document.getElementById('button');

button.addEventListener('click', function () {
    checkbox.checked = !checkbox.checked;
});