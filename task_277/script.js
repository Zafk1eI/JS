function sum_int(obj) {
	let sum = 0;
	for (let key in obj) {
	  if (typeof(obj[key]) === 'object') {
		sum += sum_int(obj[key]);
	  } else {
		sum += obj[key];
	  }
	}
	return sum;
  }

function sum_str(arr) {
	let str = '';
	for (let elem of arr) {
		if (typeof(elem) === 'object') {
			str += sum_str(elem);
		} else {
			str += elem;
		}
	}
	return str;
}


  console.log(sum_int({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}));


  console.log(sum_str(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]))


