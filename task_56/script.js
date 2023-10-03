let num = 12345;

let str = String(num)

let sum = 0;
let sum1 = 1;
let reverse = '';

for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
}

alert(sum); 

for (let i = 0; i < str.length; i++) {
    sum1 *= Number(str[i]);
}

alert(sum1); 

for (let i = str.length -1; i >=0 ; i--) {
    reverse += str[i];
}

alert(reverse); 