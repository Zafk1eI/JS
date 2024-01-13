let date_2000 = new Date(2000, 3, 1, 23, 59, 59);
let date_1988 = new Date(1988, 11, 10, 23, 59, 59);

let diff = date_2000.getTime() - date_1988.getTime();
console.log(Math.floor((diff / (1000 * 60 * 60)) / 24));

let now  = new Date();
let birthday = new Date(2023, 8, 3);


let diff1 = now.getTime() - birthday.getTime();
console.log(Math.ceil(((diff1 / (1000 * 60 * 60)) / 24) / 30));