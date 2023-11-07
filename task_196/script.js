let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);

console.log(arr);

let arr1 = [1, 2, 3, 4, 5];
arr1.splice(3, 0,'a', 'b', 'c');

console.log(arr1);

let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 0, 'a', 'b');
arr2.splice(6, 0, 'c');
arr2.splice(8, 0, 'e');

console.log(arr2);