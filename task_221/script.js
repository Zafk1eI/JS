function func(num) {
	num = 2;
}

let num = 1;
func(num);
console.log(num); //1


function func1() {
	num = 2;
}
num = 1;
func1();
console.log(num); //2


function func2() {
	let num = 2;
}

num = 1;
func2();
console.log(num); //1