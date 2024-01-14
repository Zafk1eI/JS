let parent = document.getElementById('parent');
let existingElement = document.getElementById('elem');

// Создаем новый элемент
let newElement = document.createElement('li');
newElement.textContent = 'new';

parent.insertBefore(newElement, existingElement);