let limitedInput = document.getElementById('limitedInput');
let charCountParagraph = document.getElementById('charCount');

limitedInput.addEventListener('input', function () {
    let remainingChars = 5 - this.value.length;

    if (remainingChars >= 0) {
        charCountParagraph.textContent = 'Осталось ввести ' + remainingChars + ' символов.';
    } else {
        charCountParagraph.textContent = 'Превышено на ' + Math.abs(remainingChars) + ' символов.';
    }
});