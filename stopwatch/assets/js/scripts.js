//Requirements:
// create stopwatch with 4 number time format h, m, s, mills
// reset secs at 60 seconds, same with minutes


//Notes: Stopwatch is in a development mode where a minute = 10 seconds, and an hour = 10 minutes - This allows for quick

let start = document.getElementById('start')
let end = document.getElementById('end')
let reset = document.getElementById('reset')

let hoursElapsed = document.getElementById('hoursElapsed')
let minsElapsed = document.getElementById('minsElapsed')
let secsElapsed = document.getElementById('secsElapsed')
let millsElapsed = document.getElementById('millsElapsed')

let millCalls = 0;
let secCalls = 0;
let minCalls = 0;
let decPart = 0;
let secs = 0;
let mins = 0;
let hours = 0;

let savedTime;

start.onclick = function() {
    let startTime = Date.now();
    let millDifference;
    //milliseconds calculation
    let time = setInterval( function(){
        let mill;
        let remainer;
        if(!savedTime) {
            millDifference = Date.now() - startTime;
        } else {
            millDifference = (Date.now() - startTime) + savedTime;
        }
        mill = (millDifference / 1000);
        remainer = (mill % 1).toFixed(2);
        decPart = (remainer+"").split(".")[1];
        millsElapsed.innerHTML = decPart;

        //calculate seconds
        millCalls++;
        if(millCalls >= 100){ //setInterval runs 100 times before this block executes, which should happen every 1 second
            secs = secs + 1;
            millCalls = millCalls * 0;
            secCalls++;
        }
        secsElapsed.innerHTML = secs;

        //calculate minutes
        if(secCalls >= 60){ //set to 60 for production - when minutes reach xx or greater, then reset seconds back to zero for a new minute - set at 10 for quick testing
            mins = mins + 1;
            secs = secs - secs;
            secCalls = secCalls * 0;
            minCalls++;
        }
        minsElapsed.innerHTML = mins;

        //calculate hours
        if(minCalls >= 60){ //set to 60 for production - when minutes reach xx or greater, then reset minutes back to zero for a new minute - set at 10 for quick testing
            hours = hours + 1;
            mins = mins - mins 
            minCalls = minCalls * 0; 
        }
        hoursElapsed.innerHTML = hours;

    }, 10);
    
    start.disabled = true; //disable start button so it cannot be spammed

    function stopAll() {
        clearTimeout(time);
        savedTime = millDifference;
        start.disabled = false; //re-enable start button once either restart or stop is clicked
    }

    end.onclick = function stopWatch() {
        stopAll();
        }

    reset.onclick = function resetWatch() { 
        stopAll();
        decPart = decPart * 0;
        secs = secs * 0;
        mins = mins * 0;
        hours = hours * 0;
        millCalls = millCalls * 0;
        secCalls = secCalls * 0;
        minCalls = minCalls * 0;
        savedTime = undefined;
        millsElapsed.innerHTML = decPart;
        secsElapsed.innerHTML = secs;
        minsElapsed.innerHTML = mins;
        hoursElapsed.innerHTML = hours;
    }
}
    