let fioInput = document.querySelector('#fioInput');

fioInput.addEventListener('blur', function() {
  let fioValue = fioInput.value.trim();

let formattedFIO = fioValue.replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());
fioInput.value = formattedFIO;
});