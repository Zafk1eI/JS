function createTable(rows, cols, parent) {
    let table = document.createElement('table');
    
    // создаем таблицу с rows рядами и cols колонками
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');
        
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td');
            cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
            row.appendChild(cell);
        }
        
        table.appendChild(row);
    }
    
    parent.appendChild(table);
  }

  // Пример использования:
  let tableContainer = document.getElementById('yourTableContainer'); // Замените 'yourTableContainer' на id контейнера для таблицы
  createTable(3, 4, tableContainer);