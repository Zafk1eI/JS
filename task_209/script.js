function divideByTwo(number) {
	let iterations = 0;
  
	while (number >= 10) {
	  number /= 2;
	  iterations++;
	}
  
	return iterations;
}

let iter = divideByTwo(128);
console.log(iter);

  