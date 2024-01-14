let elem = document.getElementById('elem');

// Вставка в начало списка
let startElement = document.createElement('li');
startElement.textContent = 'start';
elem.insertBefore(startElement, elem.firstElementChild);

// Вставка в конец списка
let finishElement = document.createElement('li');
finishElement.textContent = 'finish';
elem.appendChild(finishElement);