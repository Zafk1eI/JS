function func1(a, b) {
	return a == b;
}

function func2(a, b) {
	return a != b;
}

function func3(a, b) {
	return a + b >= 10;
}

function func4(num) {
	return num >= 0;
}

console.log(func1(2,4));
console.log(func2(2,4));
console.log(func3(2,4));
console.log(func4(2));