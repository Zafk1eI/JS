let str = 'abcde';

alert(str[0]); // выведет 'a'
alert(str[2]); // выведет 'c'
alert(str[4]); // выведет 'e'

let str1 = 'abcde';

let reverse_str = '';

for (let i = str1.length - 1; i >= 0; i--) {
    reverse_str += str1[i]; 
}

alert(reverse_str);

let str3 = 'abcde';
let num = 4; 

alert(str3[num]);