let mySelect = document.getElementById('mySelect');
let displaySelectedOptionBtn = document.getElementById('displaySelectedOptionBtn');

displaySelectedOptionBtn.addEventListener('click', function () {

    let selectedOption = mySelect[mySelect.selectedIndex];
    console.log(selectedOption.text);
});