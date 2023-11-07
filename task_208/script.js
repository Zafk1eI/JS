function func(num) {
	let sum = 0;
  
	for (let i = 1; i <= num; i++) {
	  sum += i;
	}
	return sum; // Возвращаем сумму после завершения цикла
  }

  console.log( func(5) );