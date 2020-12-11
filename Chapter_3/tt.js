/*    JavaScript 6th Edition
 *    Chapter 3
 *    Chapter case

 *    Tipton Turbines
 *    Variables and functions
 *    Author: Cassandra CruzRamirez
 *    Date:   2020/09/12

 *    Filename: tt.js
 */

 // global variables
 var daysOfWeek = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];

 var opponents = ["Lightning", "Combines", "Combines", "Combines",
                 "Lightning", "Lightning", "Lightning", "Lightning", 
                 "Barn Raisers", "Barn Raisers", "Barn Raisers", 
                 "Sodbusters", "Sodbusters", "Sodbusters", 
                 "Sodbusters", "(off)", "River Riders", 
                 "River Riders", "River Riders", "Big Dippers", 
                 "Big Dippers", "Big Dippers", "(off)", 
                 "Sodbusters", "Sodbusters", "Sodbusters",
                 "Combines", "Combines", "Combines", "(off)",
                 "(off)"];

var gameLocation = ["away", "away", "away", "away", "home", "home",
                    "home", "home", "home", "home", "home", "away",
                    "away", "away", "away", "", "away", "away", "away",
                    "away", "away", "away", "", "home", "home", "home",
                    "home", "home", "home", "", ""];

// function to place daysOfWeek values in header row cells
function addColumnHeaders()
{
    var i = 0;
    while (i < 7)
    {
        document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
        i++;
    }
}

//runs addColumnHeaders() function when page loads
window.addEventListener("load", addColumnHeaders, false );