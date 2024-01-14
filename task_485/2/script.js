function setAttr(selector, attributeName, attributeValue) {
    let elem = document.querySelector(selector);
    if (elem) {
        elem.setAttribute(attributeName, attributeValue);
    } else {
        console.error(`Element with selector '${selector}' not found.`);
    }
    }

    // Пример использования
    setAttr('#myElement', 'class', 'newClass');
    setAttr('.otherElement', 'src', '2.png');
