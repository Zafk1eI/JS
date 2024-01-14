let checkbox = document.querySelector('[type="checkbox"]');
let button = document.querySelector('button');

button.addEventListener('click', function () {
    if (checkbox.checked) {
        console.log('+++');
    } else {
        console.log('---');
    }
});