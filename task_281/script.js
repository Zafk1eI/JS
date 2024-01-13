let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

let res = arr.filter(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});

console.log(res);

let arr2 = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

let res2 = arr2.filter(function(elem) {
	if (elem < 0) {
		return true;
	} else {
		return false;
	}
});

console.log(res2);

let arr3 = [-2, 5, 1, -5, -1, 1, 3, 4, -1, 9];

let res3 = arr3.filter(function(elem) {
	if (elem > 0 && elem < 10) {
		return true;
	} else {
		return false;
	}
});

console.log(res3);

let arr4 = ['absfasga', 'an', 'abrs'];

let res4 = arr4.filter(function(elem) {
	if (elem.length >= 5) {
		return true;
	} else {
		return false;
	}
});

console.log(res4);

let arr5 = [-2, 5, 1, -5, -1, 1, 3, 4, -1, 9];

let res5 = arr5.filter(function(elem, index) {
		if (elem * (index + 1) < 30) {
			return true;
		} else {
			return false;
		}
});

console.log(res5);

let arr6 = [1, 2, [3, 4], 5, [6, 7]];

let res6 = arr6.filter(function(elem) {
		if (typeof elem == 'object') {
			return false;
		} else {
			return true;
		}
});

console.log(res6);