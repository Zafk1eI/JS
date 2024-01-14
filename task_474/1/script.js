let removeLinks = document.querySelectorAll('.remove');
    
removeLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        let listItem = link.parentNode;
        listItem.remove();
    });
});