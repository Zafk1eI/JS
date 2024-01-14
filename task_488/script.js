function forEach(selector, func) {
    let elems = document.querySelectorAll(selector);

    for (let i = 0; i < elems.length; i++) {
        func(elems[i], i);
    }
}

forEach('p', function (elem, index) {
    elem.textContent = index + 1 + '. ' + elem.textContent;
});
