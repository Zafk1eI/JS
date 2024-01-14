let inputField = document.getElementById('inputField');

inputField.addEventListener('change', function () {
    if (this.value.length < 5) {
        this.style.border = '2px solid green';
    } else {
        this.style.border = '2px solid red';
    }
});