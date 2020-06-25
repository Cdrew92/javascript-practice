const scrollBar = document.getElementById('scrollBar');
const content = document.querySelector(".content");
let readTimeLabel = document.querySelector('#readTime');

let contentHeight = content.offsetHeight;
let screenHeight = window.screen.height;

let wordsInContent = content.innerText;
let wordCount = wordsInContent.match(/(\w+)/g).length; //Regex - \w+ (matches all characters in a word and pushes to wordCount array) - g (greedy. continues applying \w+ until all words are pushed to wordCount array)
let minutesOfReading = parseInt(wordCount / 130);
readTimeLabel.innerHTML = "Read Time: " + minutesOfReading + " Minutes"; //sets value on page load

window.onresize = function(){
    contentHeight = content.offsetHeight;
    screenHeight = window.screen.height;
};

window.onscroll = function getYOffset() {
    let scrollOffsetPx = window.pageYOffset;
    let screenWidthSetting = (scrollOffsetPx / (contentHeight - screenHeight)) * 100; //Calculates (Pixels from top edge of screen / (Height of content - total height of viewport) Ex. 40% = (200 / (1000 - 500)) 
    scrollBar.style.minWidth = "1%"; // Sets default value

    let minutesLeft = Math.round(minutesOfReading * (screenWidthSetting / 100));     //Calculates minutes of reading remaining by piggybacking off screen width percentage(screenWidthSetting) EX: (19 * (100 / 100) = 19
    minutesLeft = parseInt(minutesOfReading - minutesLeft); // Gets inverse of minutesLeft Ex: 19 - 14 = 5 minutes left - so counter counts down instead of up
    console.log(minutesLeft);
    readTimeLabel.innerHTML = "Read Time: " + minutesLeft + " Minutes" ;
    
    if (screenWidthSetting <= 100) {
        scrollBar.style.width = screenWidthSetting + "%";
        readTimeLabel.style.top = screenWidthSetting + "%";
    } else {
        scrollBar.style.width = "100%"
    }
}