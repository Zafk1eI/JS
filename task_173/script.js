let result = [];
for (let i = 0; i < 3; i++) {
    let Array = [];
    for (let j = 1; j <= 5; j++) {
        Array.push(j);
    }
    result.push(Array);
}

console.log(result);

let res = [];
for (let i = 0; i < 3; i++) {
    let Array = [];
    for (let j = 0; j < 4; j++) {
        Array.push('x');
    }
    res.push(Array);
}

console.log(res);


let res3 = [];

for (let i = 0; i < 3; i++) {
    let arr4 = [];

    for (let j = 0; j < 2; j++) {
        let arr = [];

        for (let k = 1; k <= 5; k++) {
            arr.push(k);
        }

        arr4.push(arr);
    }

    res3.push(arr4);
}

console.log(res3);