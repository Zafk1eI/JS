let func = (function() {
	let num = 1;
	
	return function() {
		if (num > 5){
			num = 0;
			console.log(num);
		}
		else {
		console.log(num);
		num++;
		}
	}
})();

func(); //выведет 1
func(); //выведет 2
func(); //выведет 3
func(); //выведет 4
func();
func();