function func(localNum) {
	console.log(localNum);
}

func(1);


let num = 1;
func(num);


let num2 = 1;
func(num2);
num2 = 2;


num = 2;
func(num);


function func4(localNum) {
	num4 = 2;
}
let num4 = 1;
func(num4);
console.log(num4);


function func5(localNum) {
	let num5 = 2;
}
let num5 = 1;
func5(num5);
console.log(num5);