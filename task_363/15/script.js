let inp = document.querySelector('#inp');

inp.addEventListener('blur', function() {
  let digits = Array.from(inp.value, Number);
  let sum = digits.reduce((acc, digit) => acc + digit, 0);
  
  console.log(sum);
});
