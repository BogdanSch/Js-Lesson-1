"use strict";

const tourPrices = {
  Spain: 1000,
  Italy: 1200,
  France: 1100,
  Greece: 900,
  Croatia: 850,
  Monaco: 1250
};

let userCountry = prompt("Enter the country for your tour:");
let responseContainer = document.querySelector(".response")

switch (userCountry) {
  case "Spain":
  case "Italy":
  case "France":
  case "Monaco":
  case "Greece":
    let isHotTour = confirm(
      "Is it a hot tour? Click OK for a 20% discount, or Cancel for regular price."
    );
    let discountedPrice = isHotTour
      ? tourPrices[userCountry] * 0.8
      : tourPrices[userCountry];

    responseContainer.innerHTML = `The tour to ${userCountry} costs ${discountedPrice}$`;
    break;
  default:
    responseContainer.innerHTML = "Sorry, we don't have any tours for that country.";
    break;
}
