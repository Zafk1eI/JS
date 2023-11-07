function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));

let array = [];
for (let i = 0; i <= 9; i++){
    array[i] = getRandomInt(1, 100);
}
console.log(array);