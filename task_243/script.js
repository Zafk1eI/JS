function test(num, func1, func2) {
	return func1(num) + func2(num);
  }
  
  function square(x) {
	return x ** 2;
  }
  
  function cube(x) {
	return x ** 3;
  }
  
  let result = test(3, square, cube);
  console.log(result);