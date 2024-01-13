//Задание 1
function func([name, surname, department, position, salary]) {
	console.log(name, surname, department, position, salary);
}

func( ['John', 'Smit', 'development', 'programmer', 2000] );

//Задание 2
function func1([name, surname, info]) {
	console.log(name, surname, info); 
}

func1( ['John', 'Smit', 'development', 'programmer', 2000] ); 

//Задание 3
function func2([name, surname, department, position = 'джуниор']) {
	console.log(name, surname, department, position);
}

func2( ['John', 'Smit', 'development'] );

//Задание 4
function func3(department, [name, surname], [year, month, day]) {
	console.log(department, name, surname, year, month, day)
}

func3( 'development', ['John', 'Smit'], [2018, 12, 31] );