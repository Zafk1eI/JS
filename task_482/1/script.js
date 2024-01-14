let listItems = document.querySelectorAll('#list li');

for (let listItem of listItems) {
  listItem.addEventListener('click', function() {
    this.classList.toggle('active');
  });
}