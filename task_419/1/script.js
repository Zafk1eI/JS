let elem = document.getElementById('elem');
    
elem.addEventListener('click', function(event) {
    if (event.altKey) {
        elem.style.color = 'red';
    }
});