let textInput = document.getElementById('textInput');
let outputParagraph = document.getElementById('output');

textInput.addEventListener('keydown', function (event) {
    console.log(`Key: ${event.key}, Code: ${event.code}`);

    if (event.code === 'Enter') {
        event.preventDefault();
        handleEnterKey();
    }

    if (event.code === 'Backspace') {
        console.log('BackSpace key pressed');
    }
});

function handleEnterKey() {
    outputParagraph.textContent = textInput.value;
    textInput.value = '';
}