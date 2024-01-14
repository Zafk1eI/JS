let parent = document.getElementById('parent');
let button = document.getElementById('button');
let block  = document.getElementById('block');

button.addEventListener('click', function(event) {
    block.classList.add('active');
    event.stopPropagation(); 
});

parent.addEventListener('click', function() {
    block.classList.remove('active');
});
