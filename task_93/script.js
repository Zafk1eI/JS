let key = 'x';

let obj = {
	[key]: 1,
	y: 2,
	z: 3
};

console.log(obj['x']);

let key1 = 'x';
let key2 = 'y';
let key3 = 'z';

let obj1 = {
	[key1]: 1,
	[key2]: 2,
	[key3]: 3
};

console.log(obj['x'], obj['y'], obj['z']);