let list = document.getElementById('list');
    
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.textContent += '!';
    }
});