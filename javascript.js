const text1 = document.getElementById("splash-text1");
const text2 = document.getElementById("splash-text2");
const text3 = document.getElementById("splash-text3");

const video1 = document.getElementById("splash-video1");
const video2 = document.getElementById("splash-video2");
const video3 = document.getElementById("splash-video3");


function splashCarousel() {
    if (text1.style.opacity == "1") {

        text2.style.transform = "translateY(0)";
        //text2.style.transform = "scale(1)";
        text2.style.opacity = "1";

        text1.style.transform = "translateY(100%)";
        text3.style.transform = "translateY(100%)";
        //text1.style.transform = "scale(0)";
        //text3.style.transform = "scale(0)";
        text1.style.opacity = "0";
        text3.style.opacity = "0";

        video2.style.display = "block";
        video2.currentTime = 0;
        video2.play();

        video1.style.display = "none";
        video3.style.display = "none";
        video1.pause();
        video3.pause();

    } else if (text2.style.opacity == "1") {

        text3.style.transform = "translateY(0)";        
        //text3.style.transform = "scale(1)";
        text3.style.opacity = "1";

        text1.style.transform = "translateY(100%)";
        text2.style.transform = "translateY(100%)";
        //text1.style.transform = "scale(0)";
        //text2.style.transform = "scale(0)";
        text1.style.opacity = "0";
        text2.style.opacity = "0";

        video3.style.display = "block";
        video3.currentTime = 0;
        video3.play();

        video1.style.display = "none";
        video2.style.display = "none";
        video1.pause();
        video2.pause();

    } else {

        text1.style.transform = "translateY(0)";
        //text1.style.transform = "scale(1)";
        text1.style.opacity = "1";


        text2.style.transform = "translateY(100%)";
        text3.style.transform = "translateY(100%)";
        //text2.style.transform = "scale(0)";
        //text3.style.transform = "scale(0)";
        text2.style.opacity = "0";
        text3.style.opacity = "0";

        video1.style.display = "block";
        video1.currentTime = 0;
        video1.play();

        video2.style.display = "none";
        video3.style.display = "none";
        video2.pause();
        video3.pause();

    }
}

splashCarousel();
setInterval(splashCarousel, 5000);