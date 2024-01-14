let dateInput = document.querySelector('#dateInput');

dateInput.addEventListener('blur', function() {
  let originalDate = dateInput.value.trim();
  let components = originalDate.split('.');
  if (components.length === 3) {
    let formattedDate = components[2] + '-' + components[1] + '-' + components[0];
    dateInput.value = formattedDate;
  }
});