let elems = document.querySelectorAll('p');

for (let elem of elems) {
  elem.addEventListener('click', function() {
    let currentValue = parseInt(this.textContent);
    this.textContent = currentValue + 1;
  });
}