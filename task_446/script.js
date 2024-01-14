document.getElementById('countdownButton').addEventListener('click', function() {
  let count = 100;
  let timer;

  // Проверка, активен ли таймер
  if (!timer) {
    timer = setInterval(function() {
      console.log(count);

      if (count === 0) {
        clearInterval(timer);
        timer = null; // Устанавливаем таймер в null, чтобы можно было создать новый при следующем нажатии
      } else {
        count--;
      }
    }, 1000);
  }
});