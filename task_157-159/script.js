let arr = [];

for (let i = 1; i <= 10; i++) {
	arr.push(i);
}

console.log(arr);

arr = [];
for (let i = 1; i <= 10; i++) {
	arr.push('x');
}

console.log(arr);

arr = [];
let arr1 = [1,2,3,4,5,6,-6,-7];

for (let i of arr1) {
	if (i >= 0){
        arr.push(i);
    }
}

console.log(arr);