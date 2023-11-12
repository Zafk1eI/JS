let arr = [2,4,6,8,2,2];

function ischet(arr) {
	for (let elem of arr) {
		if (elem % 2 == 0) {
			return true;
		}
	}	
	return false;
}
console.log(ischet(arr));

let num = 246;

function all_number_odd(num) {
    let str = num.toString();
    for (let elem of str) {
      if (Number(elem) % 2 == 0) {
        return false;
      }
    }
    return true;
  }

  console.log(all_number_odd(num));

  function collation(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        return true;
      }
    }
    return false;
  }

  console.log(collation(arr));