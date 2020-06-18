//Requirements:
//Create an accordion using 3 buttons and blocks of text
//ID's should not be used. Refer to DOM elements using only NodeList positions

document.addEventListener('DOMContentLoaded', (event) => {

    let collapseButtons = document.querySelectorAll('.collapseButton')
    let collapseBodies = document.querySelectorAll('.collapseBody') 

    for(i=0;i<=collapseBodies.length; i++){
        collapseBodies[i].style.display = 'none';
    }

})