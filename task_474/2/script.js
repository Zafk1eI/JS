let removeRowLinks = document.querySelectorAll('.remove-row');
    
removeRowLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        let tableRow = link.closest('tr');
        tableRow.remove();
    });
});
