let allButtons = document.querySelectorAll("button");
let input = document.getElementById("input");
let num1 = "";
let operator = "";
let num2 = "";
let lengthCheck = "";
let result = "";

let value = allButtons.forEach(element => {
    element.onclick = function changeContent() { 
        //allow for negative number and num1 input only if num1 has no value AND no operator has been selected
        if (num1 == "" && operator == "") {
            if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*' || element.value == '=' || element.value == '') { //check for negative value before first number in equation
                if (element.value == '-') {
                    num1 = num1 + element.value;
                    input.innerHTML = num1;
                } else if (element.value == '+' || element.value == '/' || element.value == '*') {
                    operator = element.value;
                    lengthCheck = 0;
                }
            } else {
                num1 = num1 + element.value;
                input.innerHTML = num1;
            }
        } else if (operator == "") { //only continue if no operator is selected - Keep appending to num1 string
            if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*' || element.value == '=' || element.value == '') {
                operator = element.value;
                lengthCheck = 0;
            } else {
                num1 = num1 + element.value;
                input.innerHTML = num1;
            } //END
        } 
        //check if num1, and operator are defined and if so then switch to writing num2
        else if (num1 && operator) {
            if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*' || element.value == '=' || element.value == '') { //check for negative value before first number in equation
                if (element.value == '-') {
                    num2 = num2 + element.value;
                    input.innerHTML = num2;
                    lengthCheck = 1;
                } else if (element.value == '+' || element.value == '/' || element.value == '*') {
                    operator = element.value;
                    lengthCheck = 0;
                }
            } else {
                num2 = num2 + element.value;
                input.innerHTML = num2;
                lengthCheck = 1;
            }
        } else if (operator == "") { //only continue if no operator is selected - Keep appending to num2 string
            if (element.value == '+' || element.value == '-' || element.value == '/' || element.value == '*' || element.value == '=' || element.value == '') {
                operator = element.value;
                lengthCheck = 0;
            } 
        } else if (operator != "") {
            num2 = num2 + element.value;
            lengthCheck = 1;
        }//END

        // num1, operator, num2 input
        if (num1 && num2 && operator) {
            if (lengthCheck >= 1) {
                lengthCheck = 0;
            } else {
            result = eval(num1 + operator + num2);
            input.innerHTML = result;
            num1 = result;
            input.innerHTML = num1 + element.value;
            num2 = "";
            result = "";
            operator = "";
            }
        }
        //num1, operator, num2, then operator clicked (result should appear) should go start back at num1 input
    }
});