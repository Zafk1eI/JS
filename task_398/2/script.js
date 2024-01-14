function checkAndDisplay() {
    let elem = document.getElementById('elem');
    let output = document.getElementById('output');

    if (elem.checked) {
        output.textContent = 'привет';
    } else {
        output.textContent = 'пока';
    }
}