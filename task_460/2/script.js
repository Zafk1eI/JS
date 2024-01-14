var newParagraph = document.createElement('p');
newParagraph.textContent = '!!!';
var parentElement = document.getElementById('elem');
parentElement.parentNode.insertBefore(newParagraph, parentElement.nextSibling);