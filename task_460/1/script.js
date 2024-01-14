var newParagraph = document.createElement('p');
newParagraph.textContent = '!!!';
var parentElement = document.getElementById('elem');
parentElement.insertBefore(newParagraph, parentElement.firstChild);