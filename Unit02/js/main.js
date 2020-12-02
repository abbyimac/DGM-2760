
document.querySelector('header > h1').innerText = "Inspector Clouseau";
document.querySelector('header > h2').innerText = "This IZ Chief Inspector Clouseau speaking on the pheaun!";


function reDisplay() {
    let windowSizes = `Window size is ${window.innerWidth} px wide by ${window.innerHeight} px tall.`;
    let offset = `Window offset is ${window.screenX} px from the left edge and ${window.screenY} px from the top of the display.`;
    let pageURL = window.location;

    let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset} \n The URL is:  ${pageURL}`;

}

reDisplay();


let docTitle = document.title;
let docLastUpdate = document.lastModified;

let myDocument = document.querySelector('#myDocument').innerText = `The document title is ${docTitle} \n Last updated: ${docLastUpdate}`;

