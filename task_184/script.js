console.log (Math.pow(2,10));
console.log (Math.sqrt(245));

let array = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for(let elem of array){
	sum = sum + Math.pow(elem,3);
}
console.log(Math.sqrt(sum));