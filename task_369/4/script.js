function checkInputLength() {
    var inputElem = document.getElementById("elem");

    var expectedLength = parseInt(inputElem.getAttribute("data-length"));

    var actualLength = inputElem.value.length;

    if (actualLength !== expectedLength) {
        alert("Длина текста должна быть " + expectedLength + " символов.");
    }
}