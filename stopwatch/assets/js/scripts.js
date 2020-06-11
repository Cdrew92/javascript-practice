//Requirements:
// create stopwatch with 4 number time format 00:00
// display seconds & milliseconds until 1 minute is reached
// display minutes and seconds until 1 hour is reached
// display hours and minutes until infinity

let start = document.getElementById('start')
let end = document.getElementById('end')
let reset = document.getElementById('reset')

let startTime = Date.now();
let elapsed = document.getElementById('timeElapsed')

//Seconds calculation
let seconds = setInterval( function(){
    // Set difference = difference between epoch time and current time, every second
    let difference = Date.now() - startTime;
    let secs = Math.floor(difference / 1000);
    // console.log(secs);
    return secs;
    }, 1000);

    //milliseconds calculation
    setInterval( function millReturn(){
    let difference = Date.now() - startTime;
    let mill = (difference / 1000);
    let remainer = (mill % 1).toFixed(2);
    decPart = (remainer+"").split(".")[1];
    // console.log(decPart)
    return decPart
    }, 10);

let minutes = setInterval( function(){
    console.log("1 minute");
    // min++
    }, 60000);