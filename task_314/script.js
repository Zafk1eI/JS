function getDayOfWeek() {
    const daysOfWeek = {
        0: 'Воскресенье',
        1: 'Понедельник',
        2: 'Вторник',
        3: 'Среда',
        4: 'Четверг',
        5: 'Пятница',
        6: 'Суббота'
    };

    let date = new Date();
    let day = date.getDay();
    let dayOfWeek = daysOfWeek[day];

    if (day === 0 || day === 6) {
        console.log('Сегодня выходной.');
    } else {
        console.log('Сегодня рабочий день.');
    }

    let daysUntilSunday = 7 - day;
    if (day !== 0) {
        console.log(`До ближайшего воскресенья осталось ${daysUntilSunday} дней.`);
    } else {
        console.log('Сегодня воскресенье.');
    }

console.log(dayOfWeek);
}

getDayOfWeek();
