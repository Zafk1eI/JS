for (let i = 10; i <= 1000; i++) {
	let str = String(i); // преобразуем число в строку
	console.log(str[0]);
}

for (let i = 10; i <= 1000; i++) {
	let str = String(i); // преобразуем число в строку
	console.log(str[0] + str[1]);
}

for (let i = 10; i <= 1000; i++) {
	let str = String(i); 
	if (str[0] === '1') {
		console.log(i)
	}
}

for (let i = 10; i <= 1000; i++) {
	let str = String(i); // преобразуем число в строку
	
	if (Number(str[0])+Number(str[1]) == 5) {
		console.log(i);
	}
}
