let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
let sum = 0;

sum += arr[0][0];     // 1
sum += arr[0][1];     // 2
sum += arr[0][2];     // 3
sum += arr[0][3][0];  // 4
sum += arr[0][3][1];  // 5
sum += arr[0][3][2][0]; // 6
sum += arr[0][3][2][1]; // 7
sum += arr[1][0];     // 8
sum += arr[1][1][0];  // 9
sum += arr[1][1][1];  // 10

console.log(sum);