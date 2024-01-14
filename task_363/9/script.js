let btn  = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');

btn.addEventListener('click', function() {
  let sum = parseInt(inp1.value) + parseInt(inp2.value);
  inp3.value = sum;
});