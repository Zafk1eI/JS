function func(num) {
	return num;
	
	let res = num ** 2;
	return res;
}

console.log( func(3) ); //3 return num;

function func1(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func1(10) ); //100 num > 0
console.log( func1(-5) ); //5 num < 0

function func2(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num ** 2;
}

console.log( func2(10) ); //100
console.log( func2(-5) ); //5