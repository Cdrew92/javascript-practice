const header = document.querySelector('h1')
const originalText = document.getElementById('change').innerHTML;
function changeText() {
    let input = document.getElementById('inputNewText').value;
    if (input != "") {
        header.innerText = input;
    } else {
        header.innerText = originalText;
    }
}
