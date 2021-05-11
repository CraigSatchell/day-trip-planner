/* Day Trip Planner 
   author: Craig Satchell
   date: May 2021
*/

"use strict";

// generate day trip
function generateDayTrip() {
   const dest = selectDestination();
   document.getElementById("trip").innerHTML = '<p>' + dest + '</p>';
}

function selectDestination() {
   const arr = ['New York City',"Ocean City, NJ", "Philadelphia", "Washington, DC","Cherry Hill, New Jersey","Rehobeth Beach, Delaware"]
   return 'New York City';
}


function selectRestaurant() {
   const arr = ['Ruth Chris Steakhouse', 'Ben & Bonz Barbecue', 'True Thai Crusine', "Nature's Treats Dining Extravaganza", "Aunt Lula's Southern Style Cooking"]
   return arr[selRandomItem(arr)];
}

function selectTransportMode() {
   const arr = ['private vehicle', 'bus', 'train', 'Uber', 'Lyft'];
   return arr[selRandomItem(arr)];
}


function selectEntertainment() {
   const arr = ['movie', 'live musical', 'live play', 'jazz bar', 'night club'];
   return arr[selRandomItem(arr)];
}

function selRandomItem(arr) {
   let itemIndex = Math.floor(Math.random() * arr.length);
   return itemIndex;
}

console.log(selRandomItem([1, 3, 4, 5, 6, 7, 8]));