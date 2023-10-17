let num = 56;

if (num >=10 && num <= 99){
  let str = String(num);
  let sum = str[0] + str[1];
  if (sum <= 9){
    console.log('Сумма цифр однозначна');
  }
  else {
    console.log('Сумма цифр двухзначна');
  }
}
else {
  console.log('Число не попадает в диапазон от 10 до 99');
}