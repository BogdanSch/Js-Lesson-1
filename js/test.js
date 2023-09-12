"use strict";

{
  let x = 0;
  const RED = "#f00";

  x = "Hello, World!";
  // let x = "Hello";
  console.log(x, RED);

  let name = "Bohdan";
  let str = `Hello, ${name}!`;
  console.log(str);

  let obj = {
    x: 3,
  };

  console.log(obj.x);

  let age = 15;
  let access = age > 14 ? true : false;
  if (access) {
    console.log("Access granted!");
  } else {
    console.log("Age more than 14 required!");
  }

  let s = "";
  let a = "вівторок";
  switch (a) {
    case "понеділок":
      s += "У понеділок: тепло, +18";
      break;
    case "вівторок":
      s += "У вівторок: жарко, +25";
      break;
    case "середа":
      s += "У середу: дощ, +17";
      break;
    case "четвер":
      s += "У четвер: прохолодно, +10";
      break;
    case "п'ятниця":
      s += "У п'ятницю: хмарно, +15";
      break;
    case "субота":
      s += "У суботу: похолодало, 0";
      break;
    case "неділя":
      s += "У неділю: ще холодно, +4";
      break;
    default:
      s += "Вкажіть правильно день тижня";
      break;
  }
  console.log(s);
}
