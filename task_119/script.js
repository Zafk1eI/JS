// false - само по себе логическое false.
// 0 - числовой ноль.
// "" - пустая строка.
// null - отсутствие значения.
// undefined - значение не определено.
// NaN - "Не число" (результат некорректной математической операции).

let test = 1;
		
if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}
//+++

let test1 = 0;
		
if (test1 == true) {
	console.log('+++');
} else {
	console.log('---');
}
//---

let test2 = 1;
		
if (test2 == false) {
	console.log('+++');
} else {
	console.log('---');
}
//---

let test3 = 1;
		
if (test3 != true) {
	console.log('+++');
} else {
	console.log('---');
}
//---

let test4 = '';
		
if (test4 == false) {
	console.log('+++');
} else {
	console.log('---');
}
//+++

let test5;
		
if (test5 == true) {
	console.log('+++');
} else {
	console.log('---');
}
//---

let test6 = 3 * 'a';
		
if (test6 == true) {
	console.log('+++');
} else {
	console.log('---');
}
//---