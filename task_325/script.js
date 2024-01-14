function getDayOfWeekForPreviousMonth() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();

  // Вычисляем месяц назад
  let previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  
  // Создаем объект Date для такой же даты месяц назад
  let dateOneMonthAgo = new Date(currentYear, previousMonth, currentDay);
  
  // Получаем номер дня недели
  let dayOfWeek = dateOneMonthAgo.getDay();

  return dayOfWeek;
}

let daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
let dayOfWeekOneMonthAgo = getDayOfWeekForPreviousMonth();

console.log(`Месяц назад, в такой же день месяца, был ${daysOfWeek[dayOfWeekOneMonthAgo]}.`);
