let colorChangingParagraph = document.getElementById('colorChangingParagraph');
let intervalId7;

setInterval(function () {
    let currentColor = colorChangingParagraph.style.color;
    colorChangingParagraph.style.color = (currentColor === 'red') ? 'green' : 'red';
}, 1000);