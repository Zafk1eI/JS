let mySelect = document.getElementById('mySelect');
      
for (let option of mySelect) {
    option.textContent += option.selected ? '!' : '?';
}