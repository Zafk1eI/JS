function test() {
	let num;
	
	function func() {
		console.log(num);
	}
	
	num = 1
	func();
	
	num = 2
	func();
}

test(); //1 2