let mySelect = document.getElementById('mySelect');
let addExclamationBtn = document.getElementById('addExclamationBtn');

addExclamationBtn.addEventListener('click', function() {
    let selectedOption = mySelect[mySelect.selectedIndex];
    
    selectedOption.text += '!';
});