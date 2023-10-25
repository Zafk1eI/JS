for (let i = 0; i <= 10; i++) {
	console.log(i);
}


for (let i = 10; i >= 0; i--) {
	console.log(i);
}


for (let i = 10; i >= 0; i--) {
	console.log(i);
}


let i = 0;

while (i <= 10) {
	console.log(i);
	i++;
}


let res = 0;

for (let i = 1; i <= 10; i++) {
	res += i;
}

console.log(res);


let res1 = 1;

for (let i = 1; i <= 10; i++) {
	res1 *= i;
}

console.log(res1);


let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += Number(elem);
}

console.log(sum); // должно вывести 15


sum = 0;
for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15


sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum);


sum = 0;

for (let i = 0; i <= arr.length - 1; i++) {
sum += +arr[i];
}

console.log(sum);


sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}

console.log(sum);


sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +i;
}

console.log(sum);


let arr1 = [1, 2, 3, 4, 5];

for (let elem of arr1) {
elem = elem ** 2;
console.log(elem);
}


arr = [ ];
for (let i = 1; i <= 5; i++) {
arr.push(i);
}
console.log(arr);


let obj = {a: 1, b: 2, c: 3};
sum = 0;

for (let elem in obj) {
sum += obj[elem];
}

console.log(sum);


sum = 0;

for (let key in obj) {
sum += obj[key];
}

console.log(sum);


arr = [1, 2, 3, 4, 5];
let flag = false;
for (let elem of arr) {
if (elem === 3) {
flag = true;
break;
}
}
if (flag === true) {
console.log('+++');
} else {
console.log('---');
}


arr = [ ];

for (let i = 1; i <= 5; i++) {
arr.push(i);
}

console.log(arr);


arr = [1, 2, 3, 4, 5];
let res2 = false;

for (let elem of arr) {
if (elem === 3) {
res2 = true;
break;
}
}
console.log(res2);


arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
if (elem % 2 == 0) {
console.log(elem);
}
}


let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res3 = [ ];
for (let elem of arr3) {
if (elem % 2 != 0) {
res3.push(elem);
}
}
console.log(res3);