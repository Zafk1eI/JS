let inputs = document.querySelectorAll('input');
let button = document.querySelector('#btn');

let texts = [
  'text1',
  'text2',
  'text3',
];

button.addEventListener('click', function() {
  inputs.forEach((input, index) => {
    let text = texts[index];
    
    if (input.value === text) {
      console.log('Текст совпадает.');
      input.classList.add('right');
      input.classList.remove('wrong');
    } else {
      console.log('Текст не совпадает.');
      input.classList.remove('right');
      input.classList.add('wrong');
    }
  });
});
