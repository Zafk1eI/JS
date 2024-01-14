let cells = document.querySelectorAll('td');

for (let cell of cells) {
    cell.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = cell.textContent;

        cell.textContent = '';
        cell.appendChild(input);

        input.addEventListener('blur', function() {
            cell.textContent = this.value;
            cell.addEventListener('click', func);
        });

        cell.removeEventListener('click', func);
    });
}