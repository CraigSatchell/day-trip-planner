/* Day Trip Planner 
   author: Craig Satchell
   date: May 2021
*/

"use strict";
/* The code below could be refactored to use one function instead of five to generate trip details */

// generate day trip
function generateDayTrip() {
   
   // select trip details
   const dest = selectDestination();
   const restuarant = selectRestaurant();
   const transport = selectTransportMode();
   const entertain = selectEntertainment();


   // results template string
   const html = `<div class='tripDetails'><ul><li><span>Destination:</span>&nbsp;&nbsp;${dest}</li><li><span>Restaurant:</span>&nbsp;&nbsp;${restuarant}</li><li><span>Travel Mode:</span>&nbsp;&nbsp;${transport}</li><li><span>Entertainment:</span>&nbsp;&nbsp;${entertain}</li></li></ul></div>`


   // display trip results in browser
   document.getElementById("trip").innerHTML = html;
   // console log trip details
   console.log('Destination: ', dest, 'Restaurant: ', restuarant, 'Transportation: ', transport, 'Entertainment: ', entertain);
}

// select trip destination
function selectDestination() {
   const arr = ["Annapolis, Maryland", 'New York City', "Ocean City, New Jersey", "Philadelphia", "Washington, DC", "Cherry Hill, New Jersey", "Rehobeth Beach, Delaware"]
   return arr[selRandomItem(arr)];
}

// select trip restaurant
function selectRestaurant() {
   const arr = ['Ruth Chris Steakhouse', 'Ben & Bonz Barbecue', 'True Thai Crusine', "Nature's Treats Dining Extravaganza", "Aunt Lula's Southern Style Cooking", "Emeril's Food Festival", "Food Lover's Palace","Steaks and More","Texas Roadhouse","Longhorn Steakhouse"]
   return arr[selRandomItem(arr)];
}

// select trip transport mode
function selectTransportMode() {
   const arr = ['Private Vehicle', 'Bus', 'Amtrak', 'Uber', 'Lyft','Chartered Jet','Commercial Airlines'];
   return arr[selRandomItem(arr)];
}


// select trip enterainment
function selectEntertainment() {
   const arr = ['movie', 'live musical', 'live play', 'jazz bar', 'night club'];
   return arr[selRandomItem(arr)];
}

// return index of random item
function selRandomItem(arr) {
   let itemIndex = Math.floor(Math.random() * arr.length);
   return itemIndex;
}

// listen for click events
document.addEventListener('click', (e) => {
   if (e.target.value === 'generateTrip') {
      console.log(e.target.value);
      generateDayTrip();
      document.getElementById('actionButtons').classList.remove('hide');

   } else if (e.target.value === 'discard') {
      window.location.reload();

   } else if (e.target.value === 'keep') {
      document.getElementById('actionButtons').innerHTML = "<h4 style='width: 300px;'>Congratulations! Nice choice. Enjoy your trip...</h4>";
      document.getElementById('actionButtons').classList.add('fade-out');
      // wait to clear message from screen
      setTimeout(() => {
         window.location.reload();
      }, 4000);
   }
}, false);
