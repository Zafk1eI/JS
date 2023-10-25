for (let i = 1; i <= 100; i++) {
    console.log(i);
}


for (let i = 100; i >= 1; i--){
    console.log(i);
}


for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
    console.log(i);
	}
}


let arr = [];
for (let i = 1; i <= 10; i++) {
arr.push('x');
}
console.log(arr);


let arr1 = [];
for (let i = 1; i <= 10; i++) {
arr1.push(i);
}
console.log(arr1);


let arr2 = [1, 5, 8, 14, 52, 48];
for (let elem of arr2) {
if (elem > 0 && elem <= 10) {
console.log(elem);
}
}

let arr4 = [1, 5, 8, 14, 52, 48];
for (let elem of arr4) {
if (elem === 5) {
	console.log(elem);
	break;
	}
}


let arr5 = [1, 5, 8, 14, 52, 48];
let sum = 0;
for (let elem of arr5) {
sum += elem;
}
console.log(sum);


let arr6 = [1, 5, 8, 14, 52, 48];
sum = 0;
for (let elem of arr6) {
let result = elem ** 2;
sum += result;
}
console.log(sum);

let arr7 = [1, 5, 8, 14, 52, 48];
let result = 0;
for (let elem of arr7) {
result += elem;
}
console.log(result/arr7.length);


let arr8 = [1, 5, 8, 14, 52, 48];
let result1 = 1;
for ( i = 0; i <= arr8.length - 3; i++) {
result *= arr8[i];
}
console.log(result1);


let arr9 = [];
for (let i = 1; i <= 10; i++) {
arr9.push(i);
}
console.log(arr9);


let arr10 = [1, 3, -5, 7, 8, 14, -15, -17];
let res13 = 0;
for (let elem of arr10) {
if (elem >= 0) {
res13 += elem;
}
}
console.log(res13);


let arr11 = [10, 20, 30, 50, 235, 3000];
for (let elem of arr11) {
let str = String(elem);
if (str[0] == 1 || str[0] == 2 || str[0] == 5)
console.log(str);
}


let arr12 = [10, 20, 30, 50, 235, 3000];
for (let i = arr12.length -1; i >= 0; i--) {
console.log(arr12[i]);
}


let arr13 = [1, 2, 2, 9, 4, 5];

for (let i = 0; i < arr13.length; i++) {

    let arr13 = arr13[i];
  
    if (arr13 === i) {
      console.log(arr13[i]);
    }
  
  }


let arr14 = [5, 1, 35, 56, 3467];

for (let i = 0; i < arr14.length; i++) {
document.write(arr14[i] + '<br>');
}

for (let i = 0; i < arr14.length; i++) {
document.write(arr14[i] + '<p>');
}


let arr15 = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let week = '';

for (let i = 0; i <= arr15.length-3; i++) {
week += arr15[i] + ' ';
}

document.write(week + '<b>' + 'Saturday' + '</b>' + ' ' + '<b>' + 'Sunday' + '</b>');


let arr16 = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let day = arr16[6];
let week1 = [];

for (let i = 0; i < arr16.length - 1; i++) {
week1 += ' ' + arr16[i] + ' ';
}

document.write(week1 + ' ' + '<i>' + day + ' ' +  '</i>');


let obj1 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let key in obj1) {

    str = obj1[key] + obj1[key] * 0.1;
    
    console.log(str);
    
    }

for (let key in obj1) {
	
	if (obj1[key] <= 400) {
		
	str = obj1[key] + obj1[key] * 0.1;
		
	console.log(str);
		
	}
		
}


let arr17 = [1, 2, 3, 4, 5]; 
let arr18 = [6, 7, 8, 9, 10];
let obj11 = {};
for (let i = 0; i <= 4; i++) 
{
    let key = arr17[i];
    let value = arr18[i];
    obj11[key] = value;
}
console.log(obj11);
	

let obj12 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};

sum = 0;

let sum2 = 0;

for (let key in obj12) {

sum += Number(key);

sum2 += new Number(obj12[key]);

}

console.log(sum/sum2);
		

let obj13 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let arr20 = [];

let arr21 = [];

for (let key in obj13) {

arr20.push(key);

arr21.push(obj13[key]);

}

console.log(arr20);
console.log(arr21);


let obj14 = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
    };
    let arr19 = [];
    for (let key in obj14) {
        let value = String(obj14[key]);
        if (value[0] == 1 || value [0] == 2) {
        arr19.push(Number(value)); }
    }
    console.log(arr19);


let arr23 = ['a', 'b', 'c', 'd', 'e'];
let arr22 = [1, 2, 3, 4, 5];
let obj15 = {};
for (let i = 0; i <= 4; i++) {
    let key = arr22[i];
    let value = arr23[i];
    obj15[key] = value;
}
console.log(obj15);


let array = ['a', 'b', 'c', 'd', 'e'];
let object = {};
for (let i = 0; i < array.length; i++) {
object[i + 1] = array[i];
}
console.log(object);