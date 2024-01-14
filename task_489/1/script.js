function appendText(element, text) {
    if (element) {
      element.textContent += text;
    } else {
      console.error('Invalid element provided.');
    }
  }

  // Пример использования
  let myElement = document.getElementById('myElement');
  appendText(myElement, ' Appended text');