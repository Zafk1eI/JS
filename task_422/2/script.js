let container = document.getElementById('container');
    
container.addEventListener('click', function(event) {
    if (event.target.tagName === 'UL') {
        console.log('Click event occurred in UL');
    } else if (event.target.tagName === 'LI') {
        event.target.textContent += '!';
    }
});