let arr = [2, 4, 6, 8];
//задание 1
let result = arr.some(elem => elem > 0);
console.log(result);
//задание 2
let multiplication = arr.some((elem, index) => elem * (index + 1) < 30);
console.log(multiplication);