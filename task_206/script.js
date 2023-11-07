function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

let res = round(sqrt(2));
console.log(res);

let result = round(sum(2, 3, 4));

console.log(result);