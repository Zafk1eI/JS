let paragraphs = document.querySelectorAll('p');

for (let paragraph of paragraphs) {
    paragraph.lastElementChild.addEventListener('click', function () {
        deleteParagraph(this);
    });
}

function editText(span) {
    let text = span.parentNode.firstChild;
    let input = document.createElement('input');
    input.value = text.nodeValue;

    text.textContent = '';
    text.appendChild(input);

    input.addEventListener('blur', function () {
        text.textContent = this.value;
        span.addEventListener('click', function () {
            editText(this);
        });
    });

    span.removeEventListener('click', function () {
        editText(this);
    });
}

function deleteParagraph(link) {
    let paragraph = link.parentNode;
    paragraph.parentNode.removeChild(paragraph);
}