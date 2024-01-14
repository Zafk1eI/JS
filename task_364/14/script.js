let paragraphs = document.querySelectorAll('p');
let Button = document.getElementById('Button');

Button.addEventListener('click', function () {
    paragraphs.forEach(function (paragraph) {
        let number = parseFloat(paragraph.textContent);
        let square = Math.pow(number, 2);
        paragraph.textContent = square;
    });
});