let elem = document.querySelector('#elem');

elem.addEventListener('input', function () {
    if (this.value.length === 5) {
        console.log('Длина текста достигла 5 символов');
    }
});