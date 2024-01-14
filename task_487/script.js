function forEach(selector, func) {
    let elems = document.querySelectorAll(selector);

    for (let elem of elems) {
        func(elem);
    }
}

// Используем нашу функцию для добавления восклицательных знаков
forEach('.elem', function (elem) {
    elem.textContent += '!'; // Добавляем восклицательный знак в конец текста
});
