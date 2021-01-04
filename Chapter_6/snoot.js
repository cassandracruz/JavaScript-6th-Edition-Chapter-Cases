/* JavaScript 6th Edition
 * Chapter 6
 * Chapter case
 * Snoot Flowers
 * Functions
 * Author: Cassandra CruzRamirez
 * Date:  2021-01-04  

 *    Filename: snoot.js
 */

"use strict"; // interpret document contents in JavaScript strict   mode

/* remove default values and formatting from state and delivery date selection lists */
 function removeSelectDefaults() { 
     var emptyBoxes = document.getElementsByTagName("select"); 
     for (var i = 0; i < emptyBoxes.length; i++) { 
         emptyBoxes[i].selectedIndex = -1;
     }
}

/* run setup function when page finishes loading*/
if (window.addEventListener){
    window.addEventListener("load", removeSelectDefaults, false);
} else if (window.attachEvent){
    window.attachEvent("onload", removeSelectDefaults);
}
