//Имена функций должны быть глаголами.
//Имя каждой функции должно точно отражать то, что функция делает.
//Функция должна делать только то, что явно подразумевается её названием, и не делать другого.
//Каждая функция должна выполнять только одно действие.
//Используйте внутри функций вспомогательные функции.
//Код функций лучше не делать длиннее 10-15 строк.
//Длинные функции лучше разбивать на ряд вспомогательных.
//Используйте общепринятые префиксы в именах функций: show, get, set, calc, create, change, check.
//Выносите дублирующийся код в функции.
function calculateAverage(arr) {
	if (arr.length === 0) {
		return 0;
	  }
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum / arr.length;
}

function calculateRatio(arr1, arr2) {
	let sum1 = 0;
  
	for (let elem of arr1) {
	  sum1 += elem;
	}
  
	let sum2 = 0;
  
	for (let elem of arr2) {
	  sum2 += elem;
	}
	if (sum2 != 0){
	return sum1 / sum2;
	}
	else return 0;
}

function getSum(arr) {
	let sum = 0;
  
	for (let elem of arr) {
	  sum += elem;
	}
  
	return sum;
  }
  