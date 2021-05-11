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
   const html = "<div class='tripDetails'><ul><li><span>Destination:</span>&nbsp;&nbsp;" + dest + "</li><li><span>Restaurant:</span>&nbsp;&nbsp;" + restuarant + "</li><li><span>Travel Mode:</span>&nbsp;&nbsp;" + transport + "</li><li><span>Entertainment:</span>&nbsp;&nbsp;" + entertain + "</li></li></ul></div>"

   // display trip results in browser
   document.getElementById("trip").innerHTML = html;

   console.log('Destination: ', dest, 'Restaurant: ', restuarant, 'Transportation: ', transport, 'Entertainment: ', entertain);
}

// select trip destination
function selectDestination() {
   const arr = ["Annapolis, Maryland",'New York City', "Ocean City, New Jersey", "Philadelphia", "Washington, DC", "Cherry Hill, New Jersey", "Rehobeth Beach, Delaware"]
   return arr[selRandomItem(arr)];
}

// select trip restaurant
function selectRestaurant() {
   const arr = ['Ruth Chris Steakhouse', 'Ben & Bonz Barbecue', 'True Thai Crusine', "Nature's Treats Dining Extravaganza", "Aunt Lula's Southern Style Cooking","Emeril's Food Festival"]
   return arr[selRandomItem(arr)];
}

// select trip transport mode
function selectTransportMode() {
   const arr = ['private vehicle', 'bus', 'Amtrak', 'Uber', 'Lyft'];
   return arr[selRandomItem(arr)];
}


// select trip enterainment
function selectEntertainment() {
   const arr = ['movie', 'live musical', 'live play', 'jazz bar', 'night club'];
   return arr[selRandomItem(arr)];
}

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
      document.getElementById('response').innerHTML = "<h4 style='width: 300px;'>Congratulations! Nice choice. Enjoy your trip...</h4>";
      // wait to clear message from screen
      setTimeout(() => {
         document.getElementById('response').innerHTML = "";
         window.location.reload();
      }, 5000);
   }
}, false);
