function func(obj) {
	for (let key in obj) {
	  if (typeof(obj[key]) === 'object') {
		func(obj[key]);
	  } else {
		console.log(obj[key]);
	  }
	}
  }

  function array_generator(arr) {
	var flat_array = [];
  
	for (let elem of arr) {
	  if (typeof elem === 'object') {
		flat_array = flat_array.concat(array_generator(elem));
	  } else {
		flat_array.push(elem);
	  }
	}
  
	return flat_array;
  }
  

func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}});

let result = array_generator([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);
console.log(result);

