let elem = document.getElementById('elem');
  
function func(name, surname) {
  console.log(this.value + ', ' + name + ' ' + surname);
}

let boundFunc = func.bind(elem);

boundFunc('Privet', 'Aslan'); 
boundFunc('Aslan', 'Ne Privet'); 