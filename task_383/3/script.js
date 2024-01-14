let elem3 = document.getElementById('elem');
let children = elem3.children;

for (let child of children) {
    child.textContent = child.textContent + '!';
}