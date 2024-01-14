let myUnderscore = (function () {

    // Функция map
    function map(arr, callback) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(callback(arr[i], i, arr));
        }
        return result;
    }

    // Функция filter
    function filter(arr, callback) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    }

    // Функция each
    function each(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i, arr);
        }
    }

    // Функция reduce
    function reduce(arr, callback, initialValue) {
        let accumulator = initialValue === undefined ? arr[0] : initialValue;
        let startIndex = initialValue === undefined ? 1 : 0;

        for (let i = startIndex; i < arr.length; i++) {
            accumulator = callback(accumulator, arr[i], i, arr);
        }

        return accumulator;
    }

    // Функция find
    function find(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i], i, arr)) {
                return arr[i];
            }
        }
        return undefined;
    }

    return {
        map: map,
        filter: filter,
        each: each,
        reduce: reduce,
        find: find
    };

})();

// Пример использования
let numbers = [1, 2, 3, 4, 5];

myUnderscore.each(numbers, function (num) {
    console.log(num);  // Выводит каждый элемент массива
});

let sum = myUnderscore.reduce(numbers, function (accumulator, num) {
    return accumulator + num;
}, 0);

let found = myUnderscore.find(numbers, function (num) {
    return num % 2 === 0;
});

console.log(sum);   // 15
console.log(found); // 2

