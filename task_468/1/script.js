var table1 = document.getElementById("table1");
var arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

for (var i = 0; i < arr1.length; i++) {
    var row = table1.insertRow();
    for (var j = 0; j < arr1[i].length; j++) {
        var cell = row.insertCell();
        cell.textContent = arr1[i][j];
    }
}