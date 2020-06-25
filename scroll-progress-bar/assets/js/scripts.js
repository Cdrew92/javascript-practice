const scrollBar = document.getElementById('scrollBar');
const content = document.querySelector(".content");
let readTimeLabel = document.querySelector('#readTime');

let contentHeight = content.offsetHeight;
let screenHeight = window.screen.height;

let wordsInContent = content.innerText;
let wordCount = wordsInContent.match(/(\w+)/g).length; //Regex - \w+ (matches all characters in a word and pushes to wordCount array) - g (greedy. continues applying \w+ until all words are pushed to wordCount array)
let minutesOfReading = parseInt(wordCount / 130);
if (minutesOfReading <= 1) {
readTimeLabel.innerHTML += minutesOfReading + ' Minute' ;
} else {
    readTimeLabel.innerHTML += minutesOfReading + ' Minutes';
}

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