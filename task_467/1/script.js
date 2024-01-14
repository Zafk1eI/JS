var table1 = document.getElementById("table1");
var count = 1;
for (var i = 0; i < 5; i++) {
    var row = table1.insertRow();
    for (var j = 0; j < 5; j++) {
        var cell = row.insertCell();
        cell.textContent = count++;
    }
}