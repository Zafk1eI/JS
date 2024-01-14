let button = document.getElementById('Button');
let elems = document.querySelectorAll('p');

button.addEventListener('click', function () {
    let sum = 0;
    for (let elem of elems) {
        sum += Number(elem.textContent);
    }
    console.log(sum);
})
