
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        this.previousElementSibling.classList.toggle('hidden');
    });
});