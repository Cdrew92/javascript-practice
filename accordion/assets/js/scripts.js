//Requirements:
//Create an accordion using 3 buttons and blocks of text
//ID's should not be created in index.html. create ID's in script to then target elements


    let collapseButtons = document.querySelectorAll('.collapseButton');
    let collapseBodies = document.querySelectorAll('.collapseBody');
    let btnArray = [].slice.call(collapseButtons);

    //set display = none on page load & assign ID's to bodies
    for(i=0;i<collapseBodies.length; i++){
        collapseBodies[i].style.display = 'none';
        collapseBodies[i].setAttribute('id', "body" + [i + 1])
    }

    //assign ID's to buttons
    for(const [i , item] of btnArray.entries()){
        item.setAttribute('id', "button" + [i + 1]);
    }