var myArray = ["Элемент 1", "Элемент 2", "Элемент 3"];
var ulElement = document.getElementById("elem");
myArray.forEach(function (item) {
    var liElement = document.createElement("li");
    liElement.textContent = item;
    ulElement.appendChild(liElement);
});