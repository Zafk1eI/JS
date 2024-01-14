var olElement = document.getElementById('elem');
var buttonElement = document.getElementById('button');

buttonElement.addEventListener('click', function () {
    var liElement = document.createElement('li');
    liElement.textContent = 'item';

    liElement.addEventListener('click', function () {
        this.textContent += '!';
    });

    olElement.appendChild(liElement);
});