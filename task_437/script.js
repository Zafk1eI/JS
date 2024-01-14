"use strict";
  
let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
  console.log(this.value); // выведет '3'
  
  let child = () => {
    console.log(this.value); // выведет '3'
  }
  child();
}