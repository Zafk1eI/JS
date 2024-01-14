let links = document.querySelectorAll('a');
let Button = document.getElementById('Button');

Button.addEventListener('click', function () {
    links.forEach(function (link) {
        if (link.href.startsWith('http://')) {
            link.textContent += ' →';
        }
    });
});