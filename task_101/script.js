const arr = ['a', 'b', 'c'];
arr[1] = '!';
console.log(arr); // работает!

const arr1 = ['a', 'b', 'c'];
arr1 = [1, 2, 3];
console.log(arr1); // ошибка

const arr3 = ['a', 'b', 'c'];
arr3 = ['a', 'b', 'c'];
console.log(arr3); // ошибка