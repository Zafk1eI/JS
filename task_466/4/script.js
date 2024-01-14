function generateTable() {
    let numRows = document.getElementById('rows').value;
    let numCols = document.getElementById('cols').value;
    let table = document.getElementById('myTable');
    table.innerHTML = '';
    for (let i = 0; i < numRows; i++) {
        let row = table.insertRow(i);

        for (let j = 0; j < numCols; j++) {
            let cell = row.insertCell(j);
            cell.textContent = 'x';
        }
    }
}