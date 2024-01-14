let count = 0;
let currentYear = new Date().getFullYear();

for (let year = 2000; year <= currentYear; year++) {
    let januaryFirst = new Date(year, 0, 1);
    let dayOfWeek = januaryFirst.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        count++;
    }
}

console.log(`1 января с 2000 года по текущий год попадало на выходной ${count} раз(а).`);
