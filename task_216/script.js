let num = 1;
		
function func() {
	console.log(num);
}

func(); //1

let num2 = 1;
		
function func1() {
	console.log(num2);
}

num2 = 2;
func1(); //2

function func2() {
	console.log(num1);
}

let num1;
num1 = 1;
func2(); //1

num1 = 2;
func2(); //2