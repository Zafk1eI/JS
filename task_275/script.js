function getSum(arr) {
	let sum = arr[0] * arr[0];
  
	if (arr.length !== 1) {
	  sum += getSum(arr.slice(1)); 
	}
	return sum;
  }
  
  let arr = [1, 2, 3, 4, 5];
  console.log(getSum(arr));