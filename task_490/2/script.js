function appendElem(ulElement, text) {
    if (ulElement && ulElement.tagName === 'UL') {
        let li = document.createElement('li');
        li.textContent = text;
        ulElement.appendChild(li);
    } else {
        console.error('Invalid UL element provided.');
    }
}

let myUl = document.getElementById('myUl');
appendElem(myUl, 'New Item 1');
appendElem(myUl, 'New Item 2');
appendElem(myUl, 'New Item 3');