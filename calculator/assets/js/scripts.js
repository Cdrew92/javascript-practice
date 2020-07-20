let allButtons = document.querySelectorAll("button");
let input = document.getElementById("input");
let oldNum = "";
let operator = "";
let currentNum = "";
let result = "";

let value = allButtons.forEach(element => {
    element.onclick = function changeContent() { 
        if (oldNum == "" && currentNum == "") {
            if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*' || element.value == '=' || element.value == '') { //check for negative value before first number in equation
                if (element.value == '-') {
                    oldNum = element.value;
                }
            } else {
                oldNum = element.value; // only if oldNum == "" and input is not operator
                console.log('Old Num = ' + oldNum)
            }
        } else if (currentNum == "") {
            if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*') { // evaluates if oldNum != ""
                operator = element.value;
            } else if (operator == "") {
                oldNum = oldNum + element.value;
            } else {                            //evaluates if (oldNum != 0 && operator != "")
                currentNum = currentNum + element.value;
                console.log('currentNum = ' + currentNum)
                result = eval(oldNum + operator + currentNum)
                console.log("Result = " + result);
            }
        } else {
            oldNum = "";
            currentNum = "";
            if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*') { // evaluates if oldNum != ""
                operator = element.value;
            } else {
                oldNum = result + element.value;
            }
        }
    }
});