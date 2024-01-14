let inputs = document.querySelectorAll('input');
let btn = document.querySelector('#btn');
let sum = 0;

btn.addEventListener('click', function() {
  for (let input of inputs) {
    sum += Number(input.value);
  }

  console.log(sum);
});