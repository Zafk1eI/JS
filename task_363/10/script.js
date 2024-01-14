let btn  = document.querySelector('#btn');
let res  = document.querySelector('#res');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');

btn.addEventListener('click', function() {
  let sum = parseInt(inp1.value) + parseInt(inp2.value);
  res.textContent = sum;
});