let splashText = document.getElementById("splash-text");

function splashCarousel() {
    if (splashText.textContent == "inspiring") {

        splashText.textContent = "empowering";

        document.getElementById("splash-video2").style.display = "block";
        document.getElementById("splash-video2").currentTime = 0;
        document.getElementById("splash-video2").play();

        document.getElementById("splash-video1").style.display = "none";
        document.getElementById("splash-video3").style.display = "none";
        document.getElementById("splash-video1").pause();
        document.getElementById("splash-video3").pause();

    } else if (splashText.textContent == "empowering") {

        splashText.textContent = "actionable";

        document.getElementById("splash-video3").style.display = "block";
        document.getElementById("splash-video3").currentTime = 0;
        document.getElementById("splash-video3").play();

        document.getElementById("splash-video1").style.display = "none";
        document.getElementById("splash-video2").style.display = "none";
        document.getElementById("splash-video1").pause();
        document.getElementById("splash-video2").pause();

    } else {

        splashText.textContent = "inspiring";

        document.getElementById("splash-video1").style.display = "block";
        document.getElementById("splash-video1").currentTime = 0;
        document.getElementById("splash-video1").play();

        document.getElementById("splash-video2").style.display = "none";
        document.getElementById("splash-video3").style.display = "none";
        document.getElementById("splash-video2").pause();
        document.getElementById("splash-video3").pause();

    }
}

setInterval(splashCarousel, 5000);