let month = 5;

if (month >= 3 && month <= 5) {
  console.log('Весна');
} else if (month >= 6 && month <= 8) {
  console.log('Лето');
} else if (month >= 9 && month <= 11) {
  console.log('Осень');
} else if (month === 12 || (month >= 1 && month <= 2)) {
  console.log('Зима');
} else {
  console.log('Некорректный номер месяца');
}

let str = 'abcde';

if (str[0] === 'a') {
  console.log('да');
} else {
  console.log('нет');
}

let number = 12345;

let str1 = String(number);

if (str1[0] === '1' || str1[0] === '2' || str1[0] === '3') {
  console.log('да');
} else {
  console.log('нет');
}


let num = 345;

let hundreds = number / 100; // Сотни
let tens = (number % 100) / 10; // Десятки
let ones = number % 10; // Единицы

let sum = hundreds + tens + ones;

console.log('Сумма цифр числа: ' + sum);


let num2 = 445647;
let str4 = String(num2);
sum1 = Number(str4[0]) + Number(str4[1]) + Number(str4[2]);
sum2 = Number(str4[3]) + Number(str4[4]) + Number(str4[5]);
if (sum1 == sum2) {
	console.log('да');
  } else {
	console.log('нет');
  }