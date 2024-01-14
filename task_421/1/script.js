let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

elem1.addEventListener('click', function() {
    alert('Green block clicked');
});

elem2.addEventListener('click', function() {
    alert('Lightblue block clicked');
});

elem3.addEventListener('click', function() {
    alert('Red block clicked');
});