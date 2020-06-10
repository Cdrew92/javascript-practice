//Requirements:
// create stopwatch with 4 number time format 00:00
// display seconds & milliseconds until 1 minute is reached
// display minutes and seconds until 1 hour is reached
// display hours and minutes until infinity

let start = document.getElementById('start')
let end = document.getElementById('end')
let reset = document.getElementById('reset')

let startTime = Date.now();
let Elapsed = document.getElementById('timeElapsed')

let seconds = setInterval( function(){
    // Set difference = difference between epoch time and current time, every second
    let difference = Date.now() - startTime;
    let secs = Math.floor(difference / 1000);
    // console.log(secs);
    return secs;
    }, 1000);

    
let milliseconds = setInterval( function(){
    let difference = Date.now() - startTime;
    let mill = (difference / 1000);
    let remainer = (mill % 1).toFixed(2);
    var decPart = (remainer+"").split(".")[1];
    }, 10);

console.log(decPart);

let minutes = setInterval( function(){
    console.log("1 minute");
    // min++
    }, 60000);