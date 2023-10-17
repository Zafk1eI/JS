let str = 'a12345x';

if (str[0] == 'a') {
	console.log('строка начинается на "a"');
}

if (str[str.length -1] == 'x') {
	console.log('последний элемнт "x"');
}

if (str[0] == 'a' || str[0] == 'b') {
	console.log('строка начинается на "b" или "a"');
}