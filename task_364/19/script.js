let randomStringInput = document.getElementById('randomStringInput');
let generateButton = document.getElementById('generateButton');

generateButton.addEventListener('click', function () {
    let randomString = Math.random().toString(36).substring(2, 10);
    randomStringInput.value = randomString;
});