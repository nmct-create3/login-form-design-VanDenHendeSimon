"use strict;";

let htmlLogo, htmlCard;
let currentScale = 0;

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const setCardProperties = function () {
  htmlCard.style.setProperty("transform", "scale(0)");

  // Only apply transition effect after the scaling.
  // This means the scaling is without transition, so the user doesnt see it fading away
  sleep(200).then(() => {
    htmlCard.style.setProperty("transition", "var(--global-animation-duration)");
  });
};

const listenToLogo = function () {
  htmlLogo.addEventListener("click", function () {
    // const newScale = Math.abs(1 - currentScale);
    const newScale = currentScale ? 0 : 1;
    // const newScale = + !currentScale;

    htmlCard.style.setProperty("transform", `scale(${newScale})`);
    currentScale = newScale;
  });
};

const init = function () {
  htmlLogo = document.querySelector(".js-logo");
  htmlCard = document.querySelector(".js-card");

  setCardProperties();
  listenToLogo();
};

document.addEventListener("DOMContentLoaded", init);
