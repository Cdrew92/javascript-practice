// Calculator process
// 1. Check if num1 and operator are undefined 
// 2. If true then write first value to num1 string
// 3. Check if operator has been input 
// 4. if true then start writing num2. If false then continue writing num1
// 5. Check if both num1 and operator are defined 
// 6. If true then start writing num2
// 7. If value of num2 is a number then continue writing to num2 - If value of num2 is an operator then evaluate for results
// 8. repeat steps 4 - 8 and change operator if neccesary


let allButtons = document.querySelectorAll("button");
let input = document.getElementById("input");
let num1 = "";
let operator = "";
let num2 = "";
let checkForOperator = "";
let result = "";
let negative = "";

let value = allButtons.forEach(element => {
    element.onclick = function changeContent() { 
        //allow for negative number and num1 input only if num1 has no value AND no operator has been selected
        // begin writing num1
        if (element.value == "") { //clear function
            num1 = "";
            operator = "";
            num2 = "";
            result = "";
            input.innerHTML = "";
        }

        if (num1 == "" && operator == "") {
            if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*' || element.value == '=' || element.value == '') { //check for negative value before first number in equation
                if (element.value == '-') {
                    num1 = num1 + element.value;
                    input.innerHTML = num1;
                } else if(element.value == "=") {
                    operator = operator;
                } else if (element.value == '+' || element.value == '/' || element.value == '*') {
                    operator = element.value;
                    checkForOperator = 0;
                    console.log('add operator to num1')
                }
            } else {
                num1 = num1 + element.value;
                input.innerHTML = num1;
                console.log('add first number to num1');
            }
        } else if (operator == "" && num2 == "") { //only continue appending to num1 string if no operator is selected and num2 has not started
            if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*') {
                operator = element.value;
                checkForOperator = 0;
                console.log("add operator after num1 & set checkForOperator = 0");
            } else if(element.value == "=") {
                operator = operator;
            } else {
                num1 = num1 + element.value;
                input.innerHTML = num1;
                console.log("add second number to num1");
            } //END writing num1
        } 
        //check if num1, and operator are defined and if so then switch to writing num2
        else if (num1 && operator) {
            if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*' || element.value == '=') { //check for negative value before first number in equation
                if (element.value == '-') {
                    if (num2) {
                        operator = operator;
                    } else {
                        num2 = num2 + element.value;
                        input.innerHTML = num2;
                        checkForOperator = 1;
                        console.log('negative operater added to num2');
                    }
                } else if(element.value == "=") {
                    operator = operator;
                } else if (element.value == '+' || element.value == '/' || element.value == '*') {
                    checkForOperator = 0;
                    operator = operator;
                    console.log('operator = operator')
                }
            } else {
                num2 = num2 + element.value;
                input.innerHTML = num2;
                checkForOperator = 1;
                console.log('num2 set & checkForOperator = 1');
            }
        } //END writing num2

        // num1, operator, num2 input are defined - Calculate result unless checkForOperator = 0
        if (num1 && num2 && operator || num1 && num2 && element.value == "=") {
            if (checkForOperator >= 1) { // only calculate result if finished adding to num2 string
                checkForOperator = 0;
                console.log('checkForOperator = 0 instead of calculating');
            } else {
                result = "";
                if (operator == "-" && num2.includes("-")) { //if double negative then remove negative from num2 and change operator to +
                    num2 = num2.split('');
                    num2 = num2.splice(1);
                    console.log(num2);
                    operator = "+";
                }
                result = eval(num1 + operator + num2);
                input.innerHTML = result;
                num1 = result;
                input.innerHTML = num1;
                num2 = "";
                checkForOperator = 0;
                if (operator == "=") {
                    operator = "";
                } else {
                    operator = element.value;
                    console.log(operator);
                }
                console.log("result calculated");
            }
        }
    }
});