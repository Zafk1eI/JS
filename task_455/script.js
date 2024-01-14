var ulElement = document.getElementById('myList');

for (let i = 1; i <= 10; i++) {
    var liElement = document.createElement('li');
    liElement.textContent = i;
    ulElement.appendChild(liElement);
}