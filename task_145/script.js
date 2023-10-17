let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	console.log(key);
}

let obj1 = {x: 1, y: 2, z: 3};
for (let key in obj1) {
	console.log(obj[key]); 
}