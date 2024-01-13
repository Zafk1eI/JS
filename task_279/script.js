//задание 1
let arr1 = [1, 2, 3, 4, 5];

let res1 = arr1.map(function(elem) {
	return Math.sqrt(elem);
});

console.log(res1);

//задание 2
let arr2 = ['1', '2', '3', '4', '5'];

let res2 = arr2.map(function(elem) {
	return elem + '!';
});

console.log(res2);

//задание 3
let arr3 = ['12', '23', '34', '45', '56'];

let res3 = arr3.map(function(elem) {
 return elem.split("").reverse().join("");
});

console.log(res3);

//задание 4
let arr4 = ['123', '456', '789'];

let res4 = arr4.map(function(elem) {
    let x = [];
    x += elem.split('');
 return x;
});

console.log(res4); 

//задание 5
let arr5 = ['123', '456', '789'];

let res5 = arr5.map(function(elem, index) {
    let x = [];
    x += elem * index;
 return x;
});

console.log(res5);