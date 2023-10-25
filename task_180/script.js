let employees = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];

for (let employee of employees) {
    console.log(`${employee.name} - ${employee.salary}`);
}

let sum = 0;

for (let employee of employees) {
    sum += employee.salary;
}

console.log(sum);


let employes = [
    {
        name: 'name1',
        salary: 300,
        age: 28,
    },
    {
        name: 'name2',
        salary: 400,
        age: 29,
    },
    {
        name: 'name3',
        salary: 500,
        age: 30,
    },
    {
        name: 'name4',
        salary: 600,
        age: 31,
    },
    {
        name: 'name5',
        salary: 700,
        age: 32,
    },
];

let summ = 0;

for (let employee of employes) {
    if (employee.age >= 30) {
        summ += employee.salary;
    }
}

console.log(summ);