(function() {
	return function() {
		console.log('!');
	};
})()();

(function() {
	let sum = 0;
	return function addValue(value) {
	  if (value !== undefined) {
		sum += value;
		return addValue;
	  } else {
		console.log(sum);
	  }
	};
  })(1)(2)(3)();