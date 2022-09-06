
let today = new Date('2022-01-02').getDay();
let dayTH;

switch (today) {
  case 0:
    dayTH = "วันอาทิตย์";
    break;
  case 1:
    dayTH = "วันจันทร์";
    break;
  case 2:
    dayTH = "วันอังคาร";
    break;
  case 3:
    dayTH = "วันพุธ";
    break;
  case 4:
    dayTH = "วันพฤหัสบดี";
    break;
  case 5:
    dayTH = "วันศุกร์";
    break;
  case 6:
    dayTH = "วันเสาร์";
} 

document.getElementById('myDate').innerHTML = `<h1>${dayTH}</h1>`;
console.log(dayTH);

includeHTML();
