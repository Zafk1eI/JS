let table = document.getElementById('myTable');
for (let i = 0; i < 5; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < 5; j++) {
        let cell = row.insertCell(j);
        cell.textContent = 'Ряд ' + (i + 1) + ', Колонка ' + (j + 1);
    }
}