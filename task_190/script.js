let str = 'я учу javascript!';
let word1 = str.substr(2, 3); 
let word2 = str.substr(6, 10);
console.log(word1);
console.log(word2);

word1 = str.substring(2, 5);
word2 = str.substring(6, 16);
console.log(word1);
console.log(word2);

word1 = str.slice(2, 5); 
word2 = str.slice(6, 16);
console.log(word1);
console.log(word2);