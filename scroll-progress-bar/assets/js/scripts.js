const scrollBar = document.getElementById('scrollBar');
const content = document.querySelector(".content");

let contentHeight = content.offsetHeight;
let screenHeight = window.screen.height;

window.onresize = function(){
    contentHeight = content.offsetHeight;
    screenHeight = window.screen.height;
};

window.onscroll = function getYOffset() {
    let scrollOffsetPx = window.pageYOffset;
    let progressCalc = (scrollOffsetPx / (contentHeight - screenHeight)) * 100;

    scrollBar.style.minWidth = "1%";
    
    if (progressCalc <= 100) {
        scrollBar.style.width = progressCalc +"%"
    } else {
        scrollBar.style.width = "100%"
    }
}