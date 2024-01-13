let result = function() {
	return '!';
}();
		
console.log(result);

result = function() {
	return '!';
}; 
		
console.log(result); //функция
		
console.log(result());