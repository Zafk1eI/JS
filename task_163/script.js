let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
	if (elem == 'c') {
		flag = true;
		break;
	}
}

if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}

let number = 11;
let bool = true;
for (let i = 2; i <= Math.sqrt(number); i++) {
	if (number % i === 0) {
		bool = false;
		console.log('Составное число.'); 
		break;
		}
	}
if (bool) {
	console.log('Число простое.');
}