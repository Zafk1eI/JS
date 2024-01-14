let liElements = document.querySelectorAll('li');

for (let li of liElements) {
    li.addEventListener('click', function () {
        li.remove();
    });
}