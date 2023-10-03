let arr = [1, 2, 3];
alert(arr[0]);
alert(arr[1]); 
alert(arr[2]); 

alert(arr[0] + arr[1] + arr[2])

let arr1 = ['a', 'b', 'c', 'd'];
let result = '';
for (let i = 0; i < arr1.length; i++) {

    result += arr1[i];

    if (i < arr1.length - 1) {
      result += '+';
    }
  }
  alert(result);