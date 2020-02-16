window.onload = () => {
    //TODO: join all classes into one state class
    const mainContent = document.querySelector(".main-content");
    const cup = document.querySelector(".cup");
    const shadow = document.querySelector(".shadow");
    const confetti = document.querySelector(".confetti");
    const banner1 = document.querySelector(".banner-1");
    const banner2 = document.querySelector(".banner-2");
    const logo1 = document.querySelector(".logo-team-1");
    const logo2 = document.querySelector(".logo-team-2");
    const slogan = document.querySelector(".slogan");
    const word1 = document.querySelector(".word-1");
    const word2 = document.querySelector(".word-2");
    const word3 = document.querySelector(".word-3");
    const finalBanner = document.querySelector(".final-banner");
    const btnWatchWrapper = document.querySelector(".watch-sport__block");
    const btnCloseWrapper = document.querySelector(".close-button__wrapper");
    const btnPlayWrapper = document.querySelector(".play-button__wrapper");
    const btnStopWrapper = document.querySelector(".stop-button__wrapper");
    const watchBtn = document.querySelector(".watch__button");
    const closeBtn = document.querySelector(".close__button");
    const playBtn = document.querySelector(".play__button");
    const stopBtn = document.querySelector(".stop__button");
    const videoContent = document.querySelector(".video-content");
    const overlay = document.querySelector(".overlay");

    btnCloseWrapper.classList.add("close-button-animate");
    cup.classList.add("cup-animate");
    shadow.classList.add("shadow-animate");
    confetti.classList.add("confetti-animate");
    banner1.classList.add("banner-animate-1");
    banner2.classList.add("banner-animate-2");
    word1.classList.add("word-animate");
    word2.classList.add("word-animate");
    word3.classList.add("word-animate");
    logo1.classList.add("logo-team-1-animate");
    logo2.classList.add("logo-team-2-animate");
    finalBanner.classList.add("final-banner-animate");
    btnWatchWrapper.classList.add("watch-button__wrapper-animate");

    disSlogan =() => {slogan.classList.add("disappear-slogan")}
    setTimeout(disSlogan, 9000);
    deleteSlogan =() => {slogan.style.display = "none"}
    setTimeout(deleteSlogan, 10000);
    disBanner1 =() => {banner1.classList.add("banner-disappear-1")}
    setTimeout(disBanner1, 9000);
    disBanner2 =() => {banner2.classList.add("banner-disappear-2")}
    setTimeout(disBanner2, 9000);
    disLogo1 =() => {logo1.classList.add("logo-team-1-disappear")}
    setTimeout(disLogo1, 9000);
    disLogo2 =() => {logo2.classList.add("logo-team-2-disappear")}
    setTimeout(disLogo2, 9000);

    //TODO: move behavior to CSS class
    watchBtn.onclick = function() {
        btnStopWrapper.style.display = "block";
        btnPlayWrapper.style.display = "block";
        btnWatchWrapper.style.display = "none";
        videoContent.style.display = "block";
        overlay.style.opacity = 1;
    }
    stopBtn.onclick = function() {
        btnStopWrapper.style.display = "none";
        videoContent.style.display = "none";
        btnPlayWrapper.style.display = "none";
        btnWatchWrapper.style.display = "block";
        overlay.style.opacity = 0;
        videoContent.pause();
    }
    playBtn.onclick = function() {
        btnPlayWrapper.style.display = "none";
        videoContent.play();
    }
    videoContent.onclick = function() {
        videoContent.pause();
        btnPlayWrapper.style.display = "block";
    }
    closeBtn.onclick = function() {
        mainContent.style.display = "none";
        btnCloseWrapper.style.display = "none";
    }
}