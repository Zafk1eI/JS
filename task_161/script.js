let obj = {};

let keys = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let values = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i <= 7; i++) {
	obj[keys[i]] = values[i];
}

console.log(obj);

let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let new_obj = {};
for (let i in obj1) {
	if (obj1[i] % 2 == 0){
		new_obj[i] = obj1[i]
	}
}
console.log(new_obj);

let obj2 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj = {};

for (let key in obj2) {
    newObj[obj2[key]] = key;
}

console.log(newObj);