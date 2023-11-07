let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}

console.log(sum);


let num1 = 12345;
let arr1 = String(num1).split('');

let prod = 1;
for (let digit of arr1) {
	prod *= digit;
}

console.log(prod);