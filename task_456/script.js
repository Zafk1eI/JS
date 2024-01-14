var parent1 = document.getElementById('parent');
var outputParagraph = document.getElementById('output');

for (let i = 1; i <= 5; i++) {
    var input = document.createElement('input');
    input.type = 'text';

    // Навешиваем обработчик потери фокуса:
    input.addEventListener('blur', function () {
        outputParagraph.textContent = this.value;
    });

    parent1.appendChild(input);
}