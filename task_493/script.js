function createTableByArr(arr) {
    let table = document.createElement('table');

    for (let i = 0; i < arr.length; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < arr[i].length; j++) {
            // Создаем элемент ячейки
            let cell = document.createElement('td');

            cell.textContent = arr[i][j];

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    return table;
}

let div = document.getElementById('elem');
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let table = createTableByArr(arr);
div.appendChild(table);