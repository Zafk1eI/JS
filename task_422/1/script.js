let container = document.getElementById('container');
    
container.addEventListener('click', function(event) {
    if (event.target.tagName === 'DIV') {
        alert('Произошло событие щелчка в DIV');
    } else if (event.target.tagName === 'UL') {
        alert('Произошло событие щелчка в UL');
    } else if (event.target.tagName === 'LI') {
        alert('Произошло событие щелчка в LI');
    }
});