function appendElem(ulElement, text) {
    if (ulElement && ulElement.tagName === 'UL') {
    let li = document.createElement('li');
    li.textContent = text;
    ulElement.appendChild(li);
    } else {
    console.error('Invalid UL element provided.');
    }
}

// Пример использования с массивом
let myArray = ['Item 1', 'Item 2', 'Item 3'];
let myUl = document.getElementById('myUl');

myArray.forEach(item => {
    appendElem(myUl, item);
});