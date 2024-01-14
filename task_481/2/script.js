let buttons = document.querySelectorAll('button');
let paragraphs = document.querySelectorAll('p');

function createToggleHandler(index) {
    return function () {
        paragraphs[index].classList.toggle('hidden');
    };
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createToggleHandler(i));
}