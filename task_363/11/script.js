let inputs = document.querySelectorAll('input');
let button = document.querySelector('#btn');

button.addEventListener('click', function() {
  for (let input of inputs) {
    let isMatch = input.value === input.dataset.text;
    if (isMatch) {
      console.log('Текст совпадает.');
      input.classList.add('right');
      input.classList.remove('wrong');
    } else {
      console.log('Текст не совпадает.');
      input.classList.remove('right');
      input.classList.add('wrong');
    }
  }
});