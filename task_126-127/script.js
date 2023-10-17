let day = 15;

if (typeof day === 'number' && day >= 1 && day <= 31) {
    if (day >= 1 && day <= 10) {
      console.log('Число попадает в первую декаду месяца');
    } else if (day > 10 && day <= 20) {
      console.log('Число попадает во вторую декаду месяца');
    } else {
      console.log('Число попадает в третью декаду месяца');
    }
  } else {
    console.log('Ошибка: Число должно быть в диапазоне от 1 до 31');
  }