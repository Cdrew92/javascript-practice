//Requirements:
// Price input - check
// Quantity slider with current value displayed - check
// Only compute numbers greater than 0 - check
// Do not allow text input
// Only allow 2 decimal points in total - check
// Always have dollar sign in price input
// Output total price - check

// let counter = document.getElementById('formControlRange');
// let range = document.getElementById('range');
// let price = document.getElementById('price');
// let total = document.getElementById('total');

// range.innerHTML = counter.value;

// function update() {
//     ranger.innerHTML = counter.value;
//     total.innerHTML = counter.value * parseFloat(price.value);
//     }


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

price.addEventListener( "keydown", event => {
    // if (event.isComposing || event.keyCode > 47 && event.keyCode < 58) {
    //     console.log("success")
    //   }
});