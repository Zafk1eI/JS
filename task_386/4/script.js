let elem4 = document.getElementById('elem');
let prevSibling4 = elem4.previousElementSibling;
let nextSibling4 = elem4.nextElementSibling;

let tempText = prevSibling4.textContent;
prevSibling4.textContent = nextSibling4.textContent;
nextSibling4.textContent = tempText;