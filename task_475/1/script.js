let removeRowLinks = document.querySelectorAll('.remove-row');
let dynamicInput = document.getElementById('dynamicInput');
let dynamicText = document.getElementById('dynamicText');

removeRowLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        let tableRow = link.closest('tr');
        tableRow.remove();
    });
});

dynamicInput.addEventListener('input', function () {
    dynamicText.textContent = dynamicInput.value;
});