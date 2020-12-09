/*    JavaScript 6th Edition
 *    Chapter 2
 *    Chapter case

 *    Fan Trick Fine Art Photography
 *    Variables and functions
 *    Author: Cassandra CruzRamirez
 *    Date:  2020-08-12

 *    Filename: ft.js
 */


// global variables
var photographerCost = 0;
var totalCost = 0;
var memoryBook = false;
var reproductionRights = false;

//sets all form field values to defaults
function resetForm(){
	document.getElementById("photognum").value = 1;
	document.getElementById("photoghrs").value = 2;
	document.getElementById("membook").checked = memoryBook;
	document.getElementById("reprodrights").checked = reproductionRights;
	document.getElementById("distance").value = 0;
	calcStaff();
	createEventListeners();
}

//create event listeners
function createEventListeners(){
	document.getElementById("photognum").addEventListener("change", calcStaff, false);
	document.getElementById("photoghrs").addEventListener("change", calcStaff, false);
}

//calculates all cost based on staff and adds to total cost
function calcStaff(){
	var num = document.getElementById("photognum");
	var hrs = document.getElementById("photoghrs");
	totalCost -= photographerCost;
	photographerCost = num.value * 100 * hrs.value;
	totalCost += photographerCost;
	document.getElementById("estimate").innerHTML = "$" + totalCost; }

//resets form when page is reloaded
window.addEventListener("load", resetForm, false);
