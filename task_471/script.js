document.getElementById('increaseButton').addEventListener('click', function () {
    let tds = document.querySelectorAll('#table td');

    tds.forEach(function (td) {
        let currentValue = parseInt(td.textContent, 10);
        if (!isNaN(currentValue)) {
            td.textContent = currentValue * 2;
        }
    });
});
