let stringInput = document.getElementById('input');
let convertedString = document.getElementById('convertedString');
let button = document.getElementById('button')
let output = "";

function convertSpacesToDashes(stringParam, outputLocation) {
    console.log(stringParam);
    output = stringParam.replace(/\s+/g, '-')
    outputLocation.innerHTML = output;
}