//Requirements:
// Price input - check
// Quantity slider with current value displayed - check
// Only compute numbers greater than 0 - check
// Do not allow text input
// Only allow 2 decimal points in total
// Always have dollar sign in price input
// Output total price - check

// let counter = document.getElementById('formControlRange');
// let ranger = document.getElementById('ranger');
// let price = document.getElementById('price');
// let total = document.getElementById('total');

// ranger.innerHTML = counter.value;

// function update() {
//     ranger.innerHTML = counter.value;
//     total.innerHTML = counter.value * parseFloat(price.value);
//     }


let counter = document.getElementById('formControlRange');
let range = document.getElementById('range');
let price = document.getElementById('price');
let total = document.getElementById('total');

range.innerHTML = counter.value;

function update() {
    range.innerHTML = counter.value;
    if (counter.value <= 0 || price.value <= 0) {
        total.innerHTML = '$' + parseFloat(0.00).toFixed(2);
        } else {
            total.innerHTML = '$' + counter.value * parseFloat(price.value).toFixed(2);
        }
    }

price.addEventListener( "keydown", event => {
    // if (event.isComposing || event.keyCode > 47 && event.keyCode < 58) {
    //     console.log("success")
    //   }
});