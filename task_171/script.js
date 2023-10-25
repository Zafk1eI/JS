let arr = [[1, 2, 3], [4, 5], [6]];

for (let subArr of arr) {
	for (let elem of subArr) {
		console.log(elem);
	}
}

let array = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;

for (let subArr of array) {
    for (let subSubArr of subArr) {
        for (let num of subSubArr) {
            sum += num;
        }
    }
}

console.log(sum);