let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');

if (elem1.contains(elem2)) {
console.log('elem2 является потомком elem1');
} else {
console.log('elem2 не является потомком elem1');
}
