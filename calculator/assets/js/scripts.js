let allButtons = document.querySelectorAll("button");
let input = document.getElementById("input");
let oldNum = "";
let operator = "";
let currentNum = "";
let result = "";

let value = allButtons.forEach(element => {
    element.onclick = function changeContent() { 
        if (oldNum == "" && currentNum == "") { //evaluates if oldNum and currentNum are undefined
            operator = "";
            if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*' || element.value == '=' || element.value == '') { //check for negative value before first number in equation
                if (element.value == '-') {
                    oldNum = oldNum + element.value;
                    input.innerHTML = oldNum;
                    console.log("flag 1");
                }
            } else {
                oldNum = oldNum + element.value; // only if oldNum == "" and input is not operator
                input.innerHTML = oldNum;
                console.log("flag 2");
                console.log('Old Num = ' + oldNum)
            }
        } else if (oldNum != "" && currentNum == "") { //evaluates if oldNum is not undefined
            if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*') {
                operator = element.value;
                input.innerHTML = result;
            } 
            else if (operator == "") { //evaluates if oldNum is undefined && operator is undefined
                oldNum = oldNum + element.value;
                console.log("flag 3");
                input.innerHTML = oldNum;
            } 
            else if (result == "") { //evaluates if oldNum is undefined && result is undefined
                currentNum = currentNum + element.value;
                input.innerHTML = currentNum; //delays result in window until another operator is pressed
                result = eval(oldNum + operator + currentNum)
                console.log("flag 4");
            } 
            else if (operator != ""){
                oldNum = result;
                console.log("flag 5");
                currentNum = ""; //allowed correct math, but only with single digits
                currentNum = currentNum + element.value;
                result = eval(oldNum + operator + currentNum);                          
                input.innerHTML = currentNum;
                operator = "";
            }
        } else if (currentNum != "") {
            if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*' || element.value == '=' || element.value == '') { //check for negative value before first number in equation
                if (element.value == '-') {
                    oldNum = oldNum + element.value;
                    input.innerHTML = oldNum;
                    console.log("flag 1");
                }
            } else {
                currentNum = currentNum + element.value;
                input.innerHTML = currentNum; //delays result in window until another operator is pressed
                result = eval(oldNum + operator + currentNum)
            }
        } else {
            oldNum = "";
            currentNum = "";
            if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*') { 
                operator = element.value;
                input.innerHTML = result;
            } else {
                oldNum = result;
                input.innerHTML = oldNum;
            }
        }
    }
});

//scenarios
//1. num1 operator num2, num2, operator