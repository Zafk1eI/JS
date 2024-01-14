let parent = document.getElementById('parent');
let existingElement = document.getElementById('elem');

let newElement = document.createElement('li');
newElement.textContent = 'new';
parent.insertBefore(newElement, existingElement);

newElement.addEventListener('click', function () {
  newElement.textContent += '!';
});