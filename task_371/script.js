let paragraphs = document.querySelectorAll('p');

paragraphs.forEach(function(paragraph, index) {
    paragraph.setAttribute('data-num', index + 1);
});