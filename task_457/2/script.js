let button = document.getElementById('button');
let parent = document.getElementById('parent');

button.addEventListener('click', function () {
  let lastChild = parent.lastElementChild;

  if (lastChild) {
    lastChild.remove();
  }
});