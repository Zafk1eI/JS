let date = new Date(2018, 1, 35);
console.log(date);//Wed Mar 07 2018 00:00:00 GMT+0300 (Москва, стандартное время)

let date1 = new Date(2018, 15, 1);
console.log(date1);//Mon Apr 01 2019 00:00:00 GMT+0300 (Москва, стандартное время)

let date2 = new Date(2018, 3, 31);
console.log(date2);//Tue May 01 2018 00:00:00 GMT+0300 (Москва, стандартное время)

let date3 = new Date(2018, 1, 31);
console.log(date3);//Sat Mar 03 2018 00:00:00 GMT+0300 (Москва, стандартное время) 

let date4 = new Date(2018, 12, 33);
console.log(date4);//Sat Feb 02 2019 00:00:00 GMT+0300 (Москва, стандартное время)

let date5 = new Date(2018, 33, 33);
console.log(date5);//Mon Nov 02 2020 00:00:00 GMT+0300 (Москва, стандартное время)

let date6 = new Date(2018, 5, 0);
console.log(date6);//Thu May 31 2018 00:00:00 GMT+0300 (Москва, стандартное время)

let date7 = new Date(2018, 0, 0);
console.log(date7);//Sun Dec 31 2017 00:00:00 GMT+0300 (Москва, стандартное время)

let date8 = new Date(2018, -12, -33);
console.log(date8);//Mon Nov 28 2016 00:00:00 GMT+0300 (Москва, стандартное время)

let date9 = new Date(2018, 0, 1, 23, 0, 60);
console.log(date9);//Mon Jan 01 2018 23:01:00 GMT+0300 (Москва, стандартное время)

let date10 = new Date(2018, 0, 1, 23, 60, 0);
console.log(date10);//Tue Jan 02 2018 00:00:00 GMT+0300 (Москва, стандартное время)

let date11 = new Date(2018, 0, 1, 100, 100, 100);
console.log(date11);//Fri Jan 05 2018 05:41:40 GMT+0300 (Москва, стандартное время)