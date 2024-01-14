var table2 = document.getElementById("table2");
var employees2 = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

for (var i = 0; i < employees2.length; i++) {
    var row = table2.insertRow();
    for (var key in employees2[i]) {
        var cell = row.insertCell();
        if (key === 'age') {
            cell.textContent = employees2[i][key];
            cell.addEventListener('click', function () {
                this.textContent = parseInt(this.textContent) + 1;
            });
        } else {
            cell.textContent = employees2[i][key];
        }
    }
}