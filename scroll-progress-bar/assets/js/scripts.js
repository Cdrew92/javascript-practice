const scrollBar = document.getElementById('scrollBar');
const content = document.querySelector(".content");

let width = window.screen.width;
let widthIncrement = width / 100;

let height = window.screen.height;
let heightIncrement = height / 100;

window.onresize = function(){
    width = window.screen.width;
    width = width / 100;
    // console.log(width);
    height = window.screen.height;
    height = height / 100;
    // console.log(height);
};