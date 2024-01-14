let elem = document.getElementById('elem');

elem.addEventListener('click', function (event) {
    if (event.ctrlKey) {
        event.target.textContent += '1';
    }

    if (event.shiftKey) {
        event.target.textContent += '2';
    }
});