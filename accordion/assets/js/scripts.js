//Requirements:
//Create an accordion using 3 buttons and blocks of text
//ID's should not be created in index.html. create ID's in script to then target elements


let collapseButtons = document.querySelectorAll('.collapseButton');
let collapseBodies = document.querySelectorAll('.collapseBody');
let btnArray = [].slice.call(collapseButtons); //coerce Nodelist into array of buttons

for(i=0;i<collapseBodies.length; i++){
    collapseBodies[i].style.display = 'none';
}

//assign ID's to buttons & Bodies
for(const [i , item] of btnArray.entries()){
    item.setAttribute('id', "button" + [i + 1]);
    let button = document.getElementById('button' + [i + 1]);
    // set onclick event listener to expand/collapse elements
    button.onclick = function expandCollapse() {
        let count = 0;
        if(collapseBodies[i].style.display === 'none') {
            collapseBodies[i].style.display = 'block';
        } else {
            collapseBodies[i].style.display = 'none';
        }
    };
}