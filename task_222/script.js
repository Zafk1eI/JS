function func(obj) {
	obj.a = '!';
}

let obj = {a: 1, b: 2, c: 3};
func(obj);
console.log(obj);  //! 2 3


function func1(arg) {
	arg = '!';
}

let obj2 = {a: 1, b: 2, c: 3};
func1(obj2.a);
console.log(obj2); //1 2 3


function func2(obj) {
	obj = '!';
}

let obj1 = {a: 1, b: 2, c: 3};
func2(obj1.a);
console.log(obj1); //1  2 3


function func3(arr) {
	arr.splice(1, 1);
}

let arr = [1, 2, 3];
func3(arr);
console.log(arr); //1 3


function func4(arr) {
	arr.slice(1, 1);
}

let arr1 = [1, 2, 3];
func4(arr1);
console.log(arr1); //1 2 3


function func5(arr) {
	let newArr = arr;
	newArr[0] = '!';
}

let arr2 = [1, 2, 3];
func5(arr2);
console.log(arr2); //! 2 3
