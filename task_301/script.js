let arr = ['John', 'Smit', 'development'];
let [first_name, surname, department, position = 'trainee'] = arr; 
console.log(first_name, surname, department, position);