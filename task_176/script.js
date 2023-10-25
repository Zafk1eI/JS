let obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
};

let sum = 0;

for (let Key in obj) {
    for (let subKey in obj[Key]) {
        sum += obj[Key][subKey];
    }
}

console.log(sum);


let Object = {
    1: {
        1: 'a1',
        2: 'a2',
        3: 'a3',
    },
    2: {
        1: 'b1',
        2: 'b2',
        3: 'b3',
    },
    3: {
        1: 'c1',
        2: 'c2',
        3: 'c3',
    },
};

console.log(Object[2][2]);
console.log(Object[3][1]);

let obj1 = {
	key1: {
		a: 1, b: 2, c: {
			d: 3,
			e: 4,
		}, f: 5,
	},
	key2: {
		g: 6, h: 7,
	},
}
/*
1 (из a)
2 (из b)
3 (из d)
4 (из e)
5 (из f)
6 (из g)
7 (из h)
Суммируя их:

1 + 2 + 3 + 4 + 5 + 6 + 7 = 28
*/