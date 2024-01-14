let textInput = document.querySelector('#textInput');

textInput.addEventListener('blur', function() {
let textValue = textInput.value.trim();

let wordCount = textValue.split(/\s+/).filter(word => word.length > 0).length;
console.log('Количество слов: ' + wordCount);
});