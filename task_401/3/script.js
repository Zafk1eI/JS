let checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', function () {
    console.log('Состояние чекбокса: ' + this.checked);
});