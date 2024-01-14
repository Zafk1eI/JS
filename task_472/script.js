document.addEventListener('DOMContentLoaded', function () {
    let parent = document.querySelector('#parent');
    let button = document.querySelector('#button');

    function addNewElement() {
        let li = document.createElement('li');
        li.textContent = parent.children.length + 1;

        li.addEventListener('click', function () {
            this.remove();
        });

        parent.appendChild(li);
    }

    button.addEventListener('click', addNewElement);

    parent.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.remove();
        }
    });
});