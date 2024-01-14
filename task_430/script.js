let list = document.getElementById('list');
    
list.addEventListener('click', function(event) {
    let li = event.target.closest('li');

    if (li) {
        li.textContent += '!';
    }
});