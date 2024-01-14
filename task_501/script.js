let myModule = (function () {
    let str1 = 'переменная модуля';
    let str2 = 'переменная модуля';
    let str3 = 'переменная модуля';

    function func1() {
        alert('функция модуля');
    }

    function func2() {
        alert('функция модуля');
    }

    function func3() {
        alert('функция модуля');
    }

    // Экспорт переменных и функций
    return {
        exportedVariable: str1,
        exportedFunction1: func1,
        exportedFunction2: func2
    };
})();

// Использование экспортированных переменных и функций
console.log(myModule.exportedVariable);
myModule.exportedFunction1();
myModule.exportedFunction2();
