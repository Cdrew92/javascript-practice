//Requirements:
// Price input - check
// Quantity slider with current value displayed - check
// Only compute numbers greater than 0 - check
// Do not allow text input
// Only allow 2 decimal points in total - check
// Always have dollar sign in price input
// Output total price - check

let counterValue = document.getElementById('formControlRange').value;
let range = document.getElementById('range');
let price = document.getElementById('price');
let total = document.getElementById('total');

range.innerHTML = counterValue;

function update() {
    counterValue = document.getElementById('formControlRange').value;    
    range.innerHTML = counterValue;
    if (counterValue <= 0 || price.value <= 0) {
        total.innerHTML = '$' + parseFloat(0.00).toFixed(2);
        } else {
            total.innerHTML = '$' + (counterValue * parseFloat(price.value)).toFixed(2);
        }
    }

// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = parseFloat(this.value).toFixed(2);
          this.oldSelectionStart = this.selectionStart; //prevents cursor from moving back in front of string
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) { // if the if statement above evaluates false, which means the characters being input are not numeric as defined in setInputFilter(), else if checks to see if textbox has oldValue as a property and replaces current value with oldValue
            this.value = parseFloat(this.oldValue).toFixed(2);
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else { //catch all just in case unexpected character is input
            this.value = "";
        }
      });
    });
  }

  setInputFilter(price, function(value) {
    return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
  });