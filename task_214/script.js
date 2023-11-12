function func1() {
  return 3;
}

function func2() {
  return 5;
}

console.log(func1() + func2());


function sum(arr) {
	let res = 0;
	  
	for (let elem of arr) {
	  res += elem;
	}
  
	return res;
  }
  
  console.log(sum([1, 2, 3, 4, 5]));

  function func1() {
	return 3;
	}
function func2() {
	return 5;
}

console.log(func1() + func2());
  
  function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
	  res += elem;
	}
	
	return res;
  }
  
  let arr = [1, 2, 3, 4, 5];
  let sumResult = sum(arr);
  console.log(sumResult);


function getDigitsSum(num) {
  let arr = num.toString().split('');
  let sum = 0;

  for (let elem of arr) {
    sum += parseInt(elem);
  }

  return sum;
}

let num = 12345;
let res = getDigitsSum(num);
console.log(res);


function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(13));