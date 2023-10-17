let test1 = true;
let test2 = true;

if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}


let test3 = true;
let test4 = true;

if (test3 && !test4) {
	console.log('+++');
} else {
	console.log('---');
}


let test5 = true;
let test6 = true;

if (!test5  && !test6) {
	console.log('+++');
} else {
	console.log('---');
}


let test7 = true;
let test8 = true;
let test9 = true;

if (test7 && test8 && test9) {
	console.log('+++');
} else {
	console.log('---');
}

let test10 = true;
let test11 = true;
let test12 = true;

if (test10 || !test11 && !test12) {
	console.log('+++');
} else {
	console.log('---');
}