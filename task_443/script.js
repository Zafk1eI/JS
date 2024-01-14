let count = 100;

let timer = setInterval(function() {
  count--;
  console.log(count);

  if (count === 0) {
    clearInterval(timer); 
  }
}, 1000);
