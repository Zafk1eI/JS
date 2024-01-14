function cloneInput() {
    var originalInput = document.getElementById("originalInput");
    var clonedInput = originalInput.cloneNode(true);
    var uniqueId = "input_" + new Date().getTime();
    clonedInput.setAttribute("id", uniqueId);
    originalInput.parentNode.insertBefore(clonedInput, originalInput.nextSibling);
}