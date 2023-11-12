function square(x) {
	return x ** 2;
  }
  
  function cube(x) {
	return x ** 3;
}
  
  function func(num1, num2) {
	return square(num1) + cube(num2);
}
  
let result = func(2, 3);
console.log(result);