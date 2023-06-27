//////////////
// Elements //
//////////////

const text1 = document.getElementById("splash-text1");
const text2 = document.getElementById("splash-text2");
const text3 = document.getElementById("splash-text3");
const video1 = document.getElementById("splash-video1");
const video2 = document.getElementById("splash-video2");
const video3 = document.getElementById("splash-video3");

///////////////
// Functions //
///////////////

function splashCarousel() {
    if (text1.style.opacity == "1") {
        turnOn(text2, video2);
        turnOff(text1, video1, text3, video3);
    } else if (text2.style.opacity == "1") {
        turnOn(text3, video3);
        turnOff(text1, video1, text2, video2);
    } else {
        turnOn(text1, video1);
        turnOff(text2, video2, text3, video3);
    }
}

function turnOn(textA, videoA) {
    // Text
    textA.style.transform = "translateY(0)";
    textA.style.opacity = "1";
    // Video
    videoA.style.display = "block";
    videoA.currentTime = 0;
    videoA.play();
}

function turnOff(textB, videoB, textC, videoC) {
    // Text
    textB.style.transform = "translateY(100%)";
    textC.style.transform = "translateY(100%)";
    textB.style.opacity = "0";
    textC.style.opacity = "0";
    setTimeout(() => {
        textB.style.transform = "translateY(-100%)";
        textC.style.transform = "translateY(-100%)";
    }, 1500);
    // Video
    videoB.style.display = "none";
    videoC.style.display = "none";
    videoB.pause();
    videoC.pause();
}

//////////////
// Autoplay //
//////////////

splashCarousel();
setInterval(splashCarousel, 5000);