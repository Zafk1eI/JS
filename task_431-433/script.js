"use strict";
    
let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
  console.log(this.value); // Значение инпута

  function child() {
    console.log(this.value); // undefined (или ошибка в строгом режиме)
  }

  child();
}