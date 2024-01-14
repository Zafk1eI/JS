function appendText(element, text) {
    if (element) {
        element.textContent += text;
    } else {
        console.error('Invalid element provided.');
    }
}
let paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    appendText(paragraph, '!');
});