let textDivs = document.querySelectorAll('.textDiv');

textDivs.forEach(function (div) {
    let text = div.textContent;
    div.textContent = text.length > 10 ? text.slice(0, 10) + '...' : text;
});