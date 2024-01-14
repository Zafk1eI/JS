function addRowAndColumn() {
    let table = document.getElementById('table');
    let rows = table.getElementsByTagName('tr');

    // Добавляем новый ряд
    let newRow = table.insertRow(rows.length);

    // Добавляем ячейки в новый ряд
    for (let i = 0; i < rows[0].cells.length + 1; i++) {
      let newCell = newRow.insertCell(i);
    }

    // Добавляем новую колонку
    for (let i = 0; i < rows.length; i++) {
      let newCell = rows[i].insertCell(rows[i].cells.length);
    }
  }