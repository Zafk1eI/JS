let num = 1;

function func() {
	num = 2;
}
func();

console.log(num); //2


let num1 = 1;

function func1() {
	let num1 = 2;
}
func1();

console.log(num1); //1


num = 1;

function func2() {
	num = 2;
}

console.log(num); //1
func2();


function func3() {
	num2 = 2;
}

let num2 = 1;
func3();
console.log(num2); //2