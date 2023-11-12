let num1 = 1;

function func() {
	num1 = 2;
}
func();

console.log(num1); //2

let num = 1;

function func1() {
	let num = 2;
}
func1();

console.log(num); //1