function incrementClicks() {
    var countButton = document.getElementById("countButton");
    var clicks = parseInt(countButton.getAttribute("data-clicks")) + 1;
    countButton.setAttribute("data-clicks", clicks);
}

function showClicks() {
    var countButton = document.getElementById("countButton");
    var clicks = parseInt(countButton.getAttribute("data-clicks"));
    alert("Количество кликов: " + clicks);
}