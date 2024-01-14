let fioInput = document.querySelector('#fioInput');
let surnameInput = document.querySelector('#surnameInput');
let nameInput = document.querySelector('#nameInput');
let patronymicInput = document.querySelector('#patronymicInput');

fioInput.addEventListener('blur', function() {
  let fioValue = fioInput.value.trim();
  let fioComponents = fioValue.split(' ');
  surnameInput.value = fioComponents[0] || '';
  nameInput.value = fioComponents[1] || '';
  patronymicInput.value = fioComponents[2] || '';
});