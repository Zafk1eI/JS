let ulElement = document.getElementById('elem');

ulElement.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.textContent += '!';
    } else if (event.target.tagName === 'UL') {
        console.log('Click on ul');
    }
});