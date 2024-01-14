let listItems = document.querySelectorAll('#List li');

for (let listItem of listItems) {
    listItem.addEventListener('click', handleClick);
}
function handleClick() {
    let currentNumber = parseInt(this.getAttribute('data-number'));

    if (currentNumber < 10) {
        currentNumber++;
        this.textContent = currentNumber;
        this.setAttribute('data-number', currentNumber);
    }
}
