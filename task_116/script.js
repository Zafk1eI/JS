let num = 3;
		
if ((num > 5 && num < 10) || num == 20) {
	console.log('+++');
} else {
	console.log('---');
}
// первое "и", потом "или"

let num1 = 3;
		
if (num1 > 5 || (num1 > 0 && num1 < 3)) {
	console.log('+++');
} else {
	console.log('---');
}
// первое "и", потом "или"

let num2 = 3;
		
if (num2 == 9 || (num2 > 10 && num2 < 20) || (num2 > 20 && num2 < 30)) {
	console.log('+++');
} else {
	console.log('---');
}

// num2 == 9, равно ли значение num2 числу 9
// потом в условия которые я взял в ковычки
// потом по порядку выполняються || (или)
