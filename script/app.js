"use strict;"

let htmlLogo, htmlCard;
let currentScale = 0;

const listenToLogo = function() {
    htmlLogo.addEventListener('click', function() {
        // const newScale = Math.abs(1 - currentScale);
        const newScale = currentScale ? 0 : 1;
        // const newScale = + !currentScale;

        htmlCard.style.setProperty('transform', `scale(${newScale})`);
        currentScale = newScale;
    })
}

const init = function() {
    htmlLogo = document.querySelector('.js-logo');
    htmlCard = document.querySelector('.js-card');
    listenToLogo();
}

document.addEventListener('DOMContentLoaded', init);
