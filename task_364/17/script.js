let clickCountInput = document.getElementById('clickCountInput');
let clickableParagraphs = document.querySelectorAll('.clickableParagraph');
let clickCount = 0;

clickableParagraphs.forEach(function (paragraph) {
    paragraph.addEventListener('click', function () {
        clickCount++;
        clickCountInput.value = clickCount;
    });
});