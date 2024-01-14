document.addEventListener('mousemove', function (event) {
    let coordinatesDiv = document.getElementById('coordinates');

    let x = event.clientX;
    let y = event.clientY;

    coordinatesDiv.textContent = `X: ${x}, Y: ${y}`;
});