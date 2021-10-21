"use strict";

const $ = selector => document.querySelector(selector);
const imageCache = [];
let image = null;
const mainImage = $("#main_image");   // the img element for the show
const caption = $("#caption");        // the h2 element for the caption
let myTimer = null; 

document.addEventListener("DOMContentLoaded", () => { 
    // get all the <a> tags in the ul element
    const links = $("#image_list").querySelectorAll("a");
    
    // Process image links
   
    for ( let link of links ) {
        // Preload image and copy title properties
        image = new Image();
        image.src = link.href;
        image.alt = link.title;
        // add image to array 
        imageCache[imageCache.length] = image;
    }
/* 
    // Start slide show
    let imageCounter = 0;
    setInterval( () => { 
        // calculate the index for the current image
        imageCounter = (imageCounter + 1) % imageCache.length;
        console.log("imageCounter=" + imageCounter); 
        // get image from array
        image = imageCache[imageCounter];
        // set HTML img and h2 with values from image object
        mainImage.src = image.src;
        mainImage.alt = image.alt;
        caption.textContent = image.alt;
    },
    2000);  // 2 second interval
*/ 
       // Attach start and pause event handlers
    $("#start").onclick = function() {
        $("#pause").removeAttribute("disabled");  
        $("#start").setAttribute("disabled", "true"); 
            // Start slide show
    let imageCounter = 0;
    myTimer  = setInterval( () => { 
        // calculate the index for the current image
        imageCounter = (imageCounter + 1) % imageCache.length;
        console.log("imageCounter=" + imageCounter); 
        // get image from array
        image = imageCache[imageCounter];
        // set HTML img and h2 with values from image object
        mainImage.src = image.src;
        mainImage.alt = image.alt;
        caption.textContent = image.alt;
       
    },
    2000);  // 2 second interval   
    };
    $("#pause").onclick = function() {
        $("#pause").setAttribute("disabled", "true");  
        $("#start").removeAttribute("disabled");  
        clearInterval(myTimer); 
    };
});
