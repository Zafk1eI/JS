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

    function func4() {
        alert('функция модуля');
    }

    function func5() {
        alert('функция модуля');
    }

    // Экспорт переменных и функций
    return {
        exportedVariable1: str1,
        exportedVariable2: str2,
        exportedFunction1: func1,
        exportedFunction2: func2,
        exportedFunction3: func3,
        exportedFunction4: func4,
        exportedFunction5: func5
    };
})();

// Использование экспортированных переменных и функций
console.log(myModule.exportedVariable1);
console.log(myModule.exportedVariable2);
myModule.exportedFunction1();
myModule.exportedFunction2();
myModule.exportedFunction3();
myModule.exportedFunction4();
myModule.exportedFunction5();
