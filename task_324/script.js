function getDayOfWeek(year, month, day) {
    let daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    let date = new Date(year, month - 1, day);
    let dayOfWeek = date.getDay();
    return daysOfWeek[dayOfWeek];
  }
  
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  
  let dayOfWeekForDec31 = getDayOfWeek(currentYear, 12, 31);
  console.log(`31 декабря ${currentYear} года будет ${dayOfWeekForDec31}.`);
  