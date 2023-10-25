let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;
let num = 0;
let char = 0;

for(let i = 0; i < arr.length; i++){
    num = String(arr[i]);
    char = num[0];
    if(char == "1" || char == "2"){
        sum += arr[i];
    }
}
console.log(sum);