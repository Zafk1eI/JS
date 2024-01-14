var elem = document.getElementById("elem");
  
elem.addEventListener("click", function() {
  var dataTextValue = elem.getAttribute("data-text");
  elem.textContent += dataTextValue;
});