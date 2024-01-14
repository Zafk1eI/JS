document.getElementById('countdownButton').addEventListener('click', function() {
  let count = 100;

  let timer = setInterval(function() {
    console.log(count);

    if (count === 0) {
      clearInterval(timer);
    } else {
      count--;
    }
  }, 1000);
});