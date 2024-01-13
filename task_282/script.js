let arr = [1, 2, 3, 4, 5];
//задание 1
let check = arr.every(element => element > 0);
console.log(check);
//задание 2
let multiplication = arr.every((elem, index) => elem * (index + 1) < 30);
console.log(multiplication);