var table2 = document.getElementById("table2");
var arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

for (var i = 0; i < arr2.length; i++) {
    var row = table2.insertRow();
    for (var j = 0; j < arr2[i].length; j++) {
        var cell = row.insertCell();
        cell.textContent = arr2[i][j] ** 2;
    }
}