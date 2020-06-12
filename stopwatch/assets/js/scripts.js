//Requirements:
// create stopwatch with 4 number time format h, m, s, mills
// reset secs at 60 seconds, same with minutes


//Notes: Stopwatch is in a development mode where a minute = 10 seconds, and an hour = 10 minutes - This allows for quick

let start = document.getElementById('start')
let end = document.getElementById('end')
let reset = document.getElementById('reset')

let startTime = Date.now();
let hoursElapsed = document.getElementById('hoursElapsed')
let minsElapsed = document.getElementById('minsElapsed')
let secsElapsed = document.getElementById('secsElapsed')
let millsElapsed = document.getElementById('millsElapsed')

let secCalls = 0;
let minCalls = 0;
let mins = 0;
let hours = 0;

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
        //calculate seconds
        let secs = Math.floor(difference / 1000);
        while(secs >= 11) { //set to 60 for production - when seconds reach xx or greater, then reset back to zero for a new minute - set at 11 for quick testing
         secs = secs - 11; //set to 60 for production
        }
        // console.log(secs);
        secsElapsed.innerHTML = secs;
        //calculate minutes
        secCalls++;
        if(secCalls > 10){ //set to 60 for production - when minutes reach xx or greater, then reset back to zero for a new minute - set at 10 for quick testing
            mins = mins + 1;
            secCalls = secCalls - 11; //set to 60 for production
            minCalls++;
        }
        minsElapsed.innerHTML = mins;
        //calculate hours
        if(minCalls >= 10){ //set to 60 for production - when minutes reach xx or greater, then reset back to zero for a new minute - set at 10 for quick testin
            hours = hours + 1;
            minCalls = minCalls - 10; //set to 60 for production
        }
        hoursElapsed.innerHTML = hours;

    }, 1000);

    //Minutes calculation
    