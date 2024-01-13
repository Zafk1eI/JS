function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}

let arr = [1,2,3,4,5,6];

let result = each(arr, function(num) {
	return num * 2;
});

console.log(result);

let str = ['bastab', 'gagagg', 'ga52gaga']

let reversedStr = each(str, function (str){
	return str.split('').reverse().join('');
  });

console.log(reversedStr);

let cap_str = each(str, function (str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
  });
  
console.log(cap_str);