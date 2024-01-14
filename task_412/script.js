let select = document.getElementById('mySelect');
let selectLastOptionBtn = document.getElementById('selectLastOptionBtn');

selectLastOptionBtn.addEventListener('click', function() {
    select[select.options.length - 1].selected = true;
});