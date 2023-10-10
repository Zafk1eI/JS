let test = {x: 1, y: 2, z: 3};
console.log(test); //object

let test1 = {x: 1, y: 2, z: 3};
console.log(test1.x); //примитив 

let test2 = [1, 2, 3];
console.log(test2); //object

let test3 = [1, 2, 3];
console.log(test3[1]); //примитив 

let test4 = [1, 2, 3];
let test5 = 1;

console.log(test4); //object

let test6 = [1, 2, 3];
let test7 = 1;

console.log(test6[test7]); //object 