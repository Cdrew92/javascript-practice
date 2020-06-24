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