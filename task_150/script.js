let sum_chet = 0;

for (let i = 2; i <= 100; i += 2) {
	sum_chet += i;
}

console.log('Сумма четных чисел от 2 до 100: ' + sum_chet);

let sum_nechet = 0;

for (let i = 1; i <= 99; i += 2) {
	sum_nechet += i;
}

console.log('Сумма четных чисел от 2 до 100: ' + sum_nechet);


let p = 1;

for (let i = 1; i <= 20; i++) {
  p *= i;
}

console.log('Произведение целых чисел от 1 до 20: ' + p);