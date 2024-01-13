function func(...nums) {
    let sum = 0;
    let sred = 0;

    for (let num of nums) {
        sum += num;
    }
    sred = sum / (nums.length);
    return sred;
}

let result = func(1, 2, 3, 4, 5, 6);
console.log(result);