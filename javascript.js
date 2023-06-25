let splashText = document.getElementById("splash-text");

function splashCarousel() {
    if (splashText.textContent == "inspiring") {
        splashText.textContent = "empowering";
    } else if (splashText.textContent == "empowering") {
        splashText.textContent = "conscientious";
    } else {
        splashText.textContent = "inspiring";
    }
}

setInterval(splashCarousel, 5000);