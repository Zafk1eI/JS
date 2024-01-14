document.getElementById('Button').addEventListener('click', function () {
    let a = parseFloat(document.getElementById('inputA').value);
    let b = parseFloat(document.getElementById('inputB').value);
    let c = parseFloat(document.getElementById('inputC').value);

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        let discriminant = b * b - 4 * a * c;

        if (discriminant > 0) {
            let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            document.getElementById('rootsOutput').textContent = `Корни уравнения: x1 = ${root1.toFixed(2)}, x2 = ${root2.toFixed(2)}`;
        } else if (discriminant === 0) {
            let root = -b / (2 * a);
            document.getElementById('rootsOutput').textContent = `Уравнение имеет один корень: x = ${root.toFixed(2)}`;
        } else {
            document.getElementById('rootsOutput').textContent = 'Уравнение не имеет действительных корней';
        }
    } else {
        document.getElementById('rootsOutput').textContent = 'Введите корректные числовые значения коэффициентов';
    }
});