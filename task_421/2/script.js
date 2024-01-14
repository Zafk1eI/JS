let links = document.querySelectorAll('.link');
    
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        link.textContent += ' ' + link.href;
    });
});