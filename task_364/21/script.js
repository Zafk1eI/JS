let fahrenheitInput = document.getElementById('fahrenheitInput');
let convertButton = document.getElementById('convertButton');
let celsiusOutput = document.getElementById('celsiusOutput');

convertButton.addEventListener('click', function () {
    let fahrenheitTemperature = parseFloat(fahrenheitInput.value);

    if (!isNaN(fahrenheitTemperature)) {
        let celsiusTemperature = (5 * (fahrenheitTemperature - 32)) / 9;

        celsiusOutput.textContent = `Температура в градусах Цельсия: ${celsiusTemperature.toFixed(2)}°C`;
    } else {
        celsiusOutput.textContent = 'Введите корректное число в градусах Фаренгейта.';
    }
});