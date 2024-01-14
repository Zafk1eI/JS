function checkInputRange() {
    var inputElem = document.getElementById("elem");

    var minRange = parseInt(inputElem.getAttribute("data-min"));
    var maxRange = parseInt(inputElem.getAttribute("data-max"));
    var actualLength = inputElem.value.length;

    if (actualLength < minRange || actualLength > maxRange) {
        alert("Количество символов должно быть от " + minRange + " до " + maxRange + ".");
    }
}