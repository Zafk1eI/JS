function appendText(selector, text) {
    let elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      elements.forEach(element => {
        element.textContent += text;
      });
    } else {
      console.error(`No elements found with selector '${selector}'.`);
    }
  }

  // Пример использования
  appendText('.exampleClass', ' Appended text');