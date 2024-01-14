let elem = document.querySelector('#elem');

function addInput() {
    let input = document.createElement('input');
    input.value = elem.textContent;

    elem.textContent = '';
    elem.appendChild(input);

    input.addEventListener('blur', function () {
        elem.textContent = this.value;
        elem.addEventListener('click', addInput);
    });

    elem.removeEventListener('click', addInput);
}

elem.addEventListener('click', addInput);
