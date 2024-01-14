let buttons = document.querySelectorAll('button');
let paragraphs = document.querySelectorAll('p');
function toggleParagraph() {
    let index = Array.from(buttons).indexOf(this);
    let paragraph = paragraphs[index];

    paragraph.classList.toggle('hidden');
}

buttons.forEach(button => {
    button.addEventListener('click', toggleParagraph);
});