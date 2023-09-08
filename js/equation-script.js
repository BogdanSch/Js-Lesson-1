// let a = +prompt("Enter a: ");
// let b = +prompt("Enter b: ");

// console.log(typeof a);

let a = +prompt("Enter a value: ");
let b = +prompt("Enter b value: ");
let c = +prompt("Enter c value: ");
let responseContainer = document.querySelector(".response");

if (a !== 0) {
  let d = b ** 2 - 4 * a * c;

  if (isNaN(d)) {
    responseContainer.innerHTML = "Please enter valid values!";
  } else {
    if (d < 0) {
      responseContainer.innerHTML = "D < 0, there're no solutions!";
    } else if (d === 0) {
      let x = -b / (2 * a);
      responseContainer.innerHTML = x;
    } else {
      let x1 = (-b + Math.sqrt(d)) / (2 * a);
      let x2 = (-b - Math.sqrt(d)) / (2 * a);

      responseContainer.innerHTML = `D = ${d} <br/> x1 = ${x1}, x2 = ${x2}`;
    }
  }
} else {
  if (c !== 0) {
    let x = -b / c;
    if (isNaN(x)) {
      responseContainer.innerHTML = "Please enter valid values!";
    } else {
      responseContainer.innerHTML = x;
    }
  } else {
    responseContainer.innerHTML = "c value can't be equals to 0!";
  }
}
