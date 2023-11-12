function func() {
	let num = 5; // локальная переменная
	return num;
}

console.log(num); //error

function func() {
	let num = 5; // локальная переменная
	return num;
}

console.log(func()); //error