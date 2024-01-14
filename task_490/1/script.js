function appendText(elements, text) {
    elements.forEach(element => {
    if (element && element.nodeType === 1) {
        element.textContent += text;
    }
    });
}

// Пример использования
let paragraphs = document.querySelectorAll('p');
appendText(paragraphs, ' Appended text');