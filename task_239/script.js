let obj = {
	sum: function(arr) {
	  let result = 0;
	  for (let num of arr) {
		result += num;
	  }
	  return result;
	},
	sumOfSquares: function(arr) {
	  let result = 0;
	  for (let num of arr) {
		result += num ** 2;
	  }
	  return result;
	},
	sumOfCubes: function(arr) {
	  let result = 0;
	  for (let num of arr) {
		result += num ** 3;
	  }
	  return result;
	}
  };
  
  let arr = [1, 2, 3, 4, 5];

  console.log(obj.sum(arr));
  console.log(obj.sumOfSquares(arr));
  console.log(obj.sumOfCubes(arr));