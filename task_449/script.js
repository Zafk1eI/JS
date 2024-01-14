let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
    setInterval(() => {
        this.value = Number(elem.value) + 1;
    }, 1000);
});