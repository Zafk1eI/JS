let test1 = Boolean(3); //true
console.log(test1);

let test2 = Boolean(0); //false
console.log(test2);

let test3 = Boolean(-1); //true
console.log(test3);

let test4 = Boolean(-0); //false
console.log(test4);

let test5 = Boolean(+0); //false
console.log(test5);

let test6 = Boolean('abc'); // true
console.log(test6);

let test7 = Boolean(''); //false
console.log(test7);

let test8 = Boolean('0'); //true
console.log(test8);

let test9 = Boolean(true); //true
console.log(test9);

let test10 = Boolean(false); //false
console.log(test10);

let test11 = Boolean('true'); //true
console.log(test11);

let test12 = Boolean('false'); //true
console.log(test12);

let test13 = Boolean(null); //false
console.log(test13);

let test14 = Boolean('null'); //true
console.log(test14);

let test15 = Boolean(undefined); //faslse
console.log(test15);

let test16 = Boolean('undefined'); //true
console.log(test16);

let test17 = Boolean(NaN); //false
console.log(test17);

let test18 = Boolean('NaN'); //true
console.log(test18);

let test19 = Boolean(3 * 'abc'); // false
console.log(test19);

let test20 = Boolean(Infinity); //true
console.log(test20);

let test21 = Boolean(1 / 0); //true
console.log(test21);