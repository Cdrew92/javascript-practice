//requirements: Create scrollbar that moves horizontailly across the screen and reaches 100% width once the user has scrolled to the bottm of the page content
//Goal: calculate estimated read time based on 130wpm by counting number of words in content div and printing to DOM
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
    progressCalc = (yOffset / ((height + 16) - screenHeight)) * 100;
    if (progressCalc <= 100) {
        scrollBar.style.width = progressCalc +"%"
    } else {
        scrollBar.style.width = "100%"
    }
}