let numberInput = document.getElementById('numberInput');
let select = document.getElementById('select');

numberInput.addEventListener('blur', function() {
    let selectedValue = parseInt(numberInput.value);

    
    if (!isNaN(selectedValue) && selectedValue >= 1 && selectedValue <= select.options.length) {
        select.selectedIndex = selectedValue - 1;
    }
});