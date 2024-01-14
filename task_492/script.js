function createTable(rows, cols) {
    let table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
        }
    }

    return table;
}

let div = document.querySelector('#elem');

let table = createTable(3, 4);
table.style.color = 'red';

div.appendChild(table);