var table1 = document.getElementById("table1");
var employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

for (var i = 0; i < employees.length; i++) {
    var row = table1.insertRow();
    for (var key in employees[i]) {
        var cell = row.insertCell();
        cell.textContent = employees[i][key];
    }
}