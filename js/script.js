"use strict";

// price
const oldPrice = document.querySelector(".limited__old-price")
const newPrice = document.querySelector(".limited__new-price")

oldPrice.textContent = "R 250.00"
newPrice.textContent = "R 160.00"

// timer 
const timer = document.querySelector(".limited__timer-time");

const hours = 4;
const minutes = 51;
const seconds = 16;

let countdownSeconds = hours * 3600 + minutes * 60 + seconds;

function setTimer() {
    if (countdownSeconds <= 0) {
        clearInterval(countdown);
    } else {

        const hours = Math.floor(countdownSeconds / 3600);
        const minutes = Math.floor((countdownSeconds % 3600) / 60);
        const seconds = countdownSeconds % 60;

        const formattedHours = hours.toString().padStart(2, "0");
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");

        const outputString = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds

        timer.innerHTML = outputString;

        countdownSeconds--;
    }
}

setTimer()

const countdown = setInterval(setTimer, 1000);


// slider

const preview = document.querySelector(".preview");
const sliderImage = document.querySelector(".slider__image");
const previewImages = document.querySelectorAll(".preview__image")

previewImages[0].style.opacity = ".5"

function fadeIn(element, duration) {
    let start = null;
    const targetOpacity = 1;

    function animationStep(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const opacity = Math.min(progress / duration, targetOpacity);
        element.style.opacity = opacity;

        if (opacity < targetOpacity) {
            requestAnimationFrame(animationStep);
        }
    }

    requestAnimationFrame(animationStep);
}

preview.addEventListener("click", (e) => {
    if (e.target.className === "preview__image") {
        sliderImage.src = e.target.src
        previewImages.forEach(image => image.style.opacity = "1")
        e.target.style.opacity = ".5"

        fadeIn(sliderImage, 1000);
    }
})


// dropdown

const colorDropdown = document.querySelector(".color-dropdown");
const sizeDropdown = document.querySelector(".size-dropdown");
const colorButton = document.querySelector("#color")
const sizeButton = document.querySelector("#size")

colorDropdown.style.zIndex = "-10"
sizeDropdown.style.zIndex = "-10"

// Обработчики перестают срабатывать после изменения zIndex
colorDropdown.addEventListener("click", (e) => {
    // Делегировать событие дропдауну, 
    // получить innerHTML из li и поместить в innerHTML кнопки
})

sizeDropdown.addEventListener("click", (e) => {
    // Делегировать событие дропдауну, 
    // получить innerHTML из li и поместить в innerHTML кнопки
})

colorButton.addEventListener("focus", () => {
    colorDropdown.style.zIndex = "10"
})

sizeButton.addEventListener("focus", () => {
    sizeDropdown.style.zIndex = "10"
})

colorButton.addEventListener("blur", () => {
    colorDropdown.style.zIndex = "-10"
})

sizeButton.addEventListener("blur", () => {
    sizeDropdown.style.zIndex = "-10"
})