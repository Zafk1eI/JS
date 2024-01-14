let avgModule = (function () {

    function sum(arr, pow) {
        let res = 0;

        for (let elem of arr) {
            res += elem ** pow;
        }

        return res;
    }

    return {
        avg1: function (arr) {
            return sum(arr, 1) / arr.length;
        },
        avg2: function (arr) {
            return sum(arr, 2) / arr.length;
        },
        avg3: function (arr) {
            return sum(arr, 3) / arr.length;
        }
    };

})();

console.log(avgModule.avg1([1, 2, 3]));
console.log(avgModule.avg2([1, 2, 3]));
console.log(avgModule.avg3([1, 2, 3])); 
