document.addEventListener('DOMContentLoaded', function () {
    let table = document.querySelector('#table');
    let addButton = document.querySelector('#addRowButton');

    addButton.addEventListener('click', function () {
        let tr = document.createElement('tr');

        for (let i = 1; i <= 3; i++) {
            let td = document.createElement('td');
            td.textContent = 'Новая ячейка';
            tr.appendChild(td);
        }

        table.appendChild(tr);
    });
});