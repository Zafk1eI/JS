var table3 = document.getElementById("table3");
var employees3 = [
  { name: 'employee1', age: 30, salary: 400 },
  { name: 'employee2', age: 31, salary: 500 },
  { name: 'employee3', age: 32, salary: 600 },
];

for (var i = 0; i < employees3.length; i++) {
  var row = table3.insertRow();
  for (var key in employees3[i]) {
    var cell = row.insertCell();
    if (key === 'salary') {
      cell.textContent = employees3[i][key];
      cell.addEventListener('click', function () {
        this.textContent = parseFloat(this.textContent) * 1.1;
      });
    } else {
      cell.textContent = employees3[i][key];
    }
  }
}