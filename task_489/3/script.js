function setValue(inputElement, text) {
    if (inputElement && inputElement.tagName === 'INPUT') {
        inputElement.value = text;
    } else {
        console.error('Invalid input element provided.');
    }
}

let myInput = document.getElementById('myInput'); // Замените 'myInput' на реальный ID вашего инпута
setValue(myInput, 'New Value');
