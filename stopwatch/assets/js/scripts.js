//Requirements:
// create stopwatch with 4 number time format h, m, s, mills
// reset secs at 60 seconds, same with minutes

let start = document.getElementById('start')
let end = document.getElementById('end')
let reset = document.getElementById('reset')

let startTime = Date.now();
let hoursElapsed = document.getElementById('hoursElapsed')
let minsElapsed = document.getElementById('minsElapsed')
let secsElapsed = document.getElementById('secsElapsed')
let millsElapsed = document.getElementById('millsElapsed')

let secCalls = 0;
let mins = 0;

    //milliseconds calculation
    let mills = setInterval( function(){
        let difference = Date.now() - startTime;
        let mill = (difference / 1000);
        let remainer = (mill % 1).toFixed(2);
        decPart = (remainer+"").split(".")[1];
        // console.log(decPart)
        millsElapsed.innerHTML = decPart;
    }, 10);

    //Seconds calculation
    let seconds = setInterval( function(){
        // Set difference = difference between epoch time and current time, every second
        let difference = Date.now() - startTime;
        let secs = Math.floor(difference / 1000);
        while(secs >= 11) {
         secs = secs - 11; 
        }
        // console.log(secs);
        secsElapsed.innerHTML = secs;
        secCalls++;
        if(secCalls >= 10){
            mins = mins +1;
        }
        minsElapsed.innerHTML = mins;
    }, 1000);

    //Minutes calculation
    