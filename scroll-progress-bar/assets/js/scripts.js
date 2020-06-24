const scrollBar = document.getElementById('scrollBar');
const content = document.querySelector(".content");

let width = window.screen.width;
let widthIncrement = width / 100;

let height = content.offsetHeight;
// let heightIncrement = height / 100;
let screenHeight = window.screen.height;

let progressCalc;
let contentOffset;

window.onresize = function(){
    width = window.screen.width;
    widthIncrement = width / 100;
    // console.log(width);
    height = content.offsetHeight;
    // heightIncrement = height / 100;
    // console.log(height);
};

window.onscroll = function getYOffset() {
    yOffset = window.pageYOffset;
    contentOffset = height - yOffset;
    // console.log(yOffsetIncrement);

    progressCalc = ((yOffset - 16)/ (height - screenHeight)) * 100;
    if (progressCalc <= 100) {
        scrollBar.style.width = progressCalc +"%"
    } else {
        scrollBar.style.width = "100%"
    }
    console.log(progressCalc);
    // scrollBar.style.width = progressCalc
}