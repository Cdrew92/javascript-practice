const scrollBar = document.getElementById('scrollBar');
const content = document.querySelector(".content");

let height = content.offsetHeight;
let screenHeight = window.screen.height;

let progressCalc;
let contentOffset;

window.onresize = function(){
    width = window.screen.width;
    widthIncrement = width / 100;
    height = content.offsetHeight;
    yOffset = window.pageYOffset;
    screenHeight = window.screen.height;
};

window.onscroll = function getYOffset() {
    yOffset = window.pageYOffset;
    contentOffset = height - yOffset;
    scrollBar.style.minWidth = "1%";
    progressCalc = (yOffset / ((height + 16)- screenHeight)) * 100;
    if (progressCalc <= 100) {
        scrollBar.style.width = progressCalc +"%"
    } else {
        scrollBar.style.width = "100%"
    }
}