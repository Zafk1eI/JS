let arr = [1, 2, 3, 0, 4, 5, -1, 5];

for (let elem of arr) {
	if (elem == 0) {
		console.log('Встретился 0');
		break; // выйдем из цикла
	}
	else {
		console.log(elem);
	}
}

let res = 0;
for (let elem of arr) {
	if (!(elem < 0)) {
		res += elem;
	}
	else {
		console.log('Встретлось отрицательное число');
		break; // выйдем из цикла
	}
}
console.log (`Сумма до отрицательного элемента = ${res}`);

let index;
for (let i of arr) {
    if (arr[i] === 3) {
        index = i;
        break;
    }
}

console.log("Позиция первого числа 3 в массиве:", index);

let sum = 0;
let count = 0;

while (sum <= 100) {
    count++;
    sum += count;
}

console.log("Для получения суммы больше 100 нужно сложить " + count + " чисел.");





