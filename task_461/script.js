var newElement = document.createElement("div");
newElement.className = "www";
newElement.innerHTML = "<p>text</p><p>text</p><input>";
var existingElement = document.getElementById("elem");
existingElement.parentNode.insertBefore(newElement, existingElement);