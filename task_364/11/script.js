let paragraphs = document.querySelectorAll('p');
let numberParagraphsButton = document.getElementById('numberParagraphsButton');

numberParagraphsButton.addEventListener('click', function () {
    paragraphs.forEach(function (paragraph, index) {
        paragraph.textContent += ' ' + (index + 1);
    });
});