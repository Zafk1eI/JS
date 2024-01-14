var element = document.getElementById("elem");
var isParagraph = element.tagName.toLowerCase() === "p";
console.log("Элемент " + (isParagraph ? "является" : "не является") + " абзацем.");