let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

input1.addEventListener('input', function () {
    if (this.value.length === 2) {
        input2.focus();
    }
});

input2.addEventListener('input', function () {
    if (this.value.length === 2) {
        this.blur();
    }
});